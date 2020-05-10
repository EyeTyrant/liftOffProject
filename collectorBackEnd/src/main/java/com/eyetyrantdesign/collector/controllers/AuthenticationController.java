package com.eyetyrantdesign.collector.controllers;

import com.eyetyrantdesign.collector.models.User;
import com.eyetyrantdesign.collector.models.data.UserRepository;
import com.eyetyrantdesign.collector.models.dto.LoginFormDTO;
import com.eyetyrantdesign.collector.models.dto.RegistrationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

  @Autowired
  UserRepository userRepository;

  private static final String userSessionKey = "user";

  public User getUserFromSession(HttpSession session) {
    Integer userId = (Integer) session.getAttribute(userSessionKey);
    if (userId == null) {
      return null;
    }

    Optional<User> user = userRepository.findById(userId);

    if (user.isEmpty()) {
      return null;
    }

    return user.get();
  }
   private static void setUserInSession(HttpSession session, User user) {
    session.setAttribute(userSessionKey, user.getId());
   }



//   @PostMapping("/reg")
//  public User addUser(@RequestBody User newUser) {
//    return userRepository.save(newUser);
//   }

  @GetMapping("reg")
  @ResponseBody
  public Iterable<User>getAllUsers() {return userRepository.findAll();}

  @GetMapping("reg/{id}")
  @ResponseBody
  public Optional<User> getUserById(@PathVariable Integer id) {return userRepository.findById(id);}

  @PostMapping("reg")
  public String processRegistrationForm(@RequestBody @Valid RegistrationFormDTO registrationFormDTO,
                                         Errors errors,
                                         HttpServletRequest request) {

    if (errors.hasErrors()) {
      System.out.println(errors);
      return "reg errors";
    }

    User existingUser = userRepository.findByUserName(registrationFormDTO.getUserName());

    if (existingUser != null) {
      errors.rejectValue("userName", "userName.exists", "Already exists");
      return "exist";
    }

    String password = registrationFormDTO.getPassword();
    String verifyPassword = registrationFormDTO.getVerifyPassword();


    if (!password.equals(verifyPassword)) {
      errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
      return "mismatch";
    }

    User newUser = new User(registrationFormDTO.getFirstName(),
                            registrationFormDTO.getLastName(),
                            registrationFormDTO.getUserName(),
                            registrationFormDTO.getPassword());
    userRepository.save(newUser);
    setUserInSession(request.getSession(), newUser);

    return "";// PUTTING ANY VALUE HERE WILL CAUSE UNEXPECTED TOKEN IN JSON ERRORS
              // AS RETURNING TEXT NOT JSON IN RESPONSE
  }

  @PostMapping("login")
  public String processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO,
                                 Errors errors,
                                 HttpServletRequest request
                                 ) {

    if (errors.hasErrors()) {
      return "login errors";
    }

    User theUser = userRepository.findByUserName(loginFormDTO.getUserName());

    if (theUser == null) {
      errors.rejectValue("userName", "userName.invalid", "The given username does not exist");
      return "invalid username";
    }

    String password = loginFormDTO.getPassword();

    if (!theUser.isMatchingPassword(password)) {
      errors.rejectValue("password", "password.invalid", "Invalid password");
      return "invalid password";
    }

    setUserInSession(request.getSession(), theUser);

    return "";  // can I redirect to users list page here?
                // PUTTING ANY VALUE HERE WILL CAUSE UNEXPECTED TOKEN IN JSON ERRORS
                // AS RETURNING TEXT NOT JSON IN RESPONSE
  }

  @GetMapping("logout")
  public String logout(HttpServletRequest request) {
    request.getSession().invalidate();
    return "";
  }
}
