package com.eyetyrantdesign.collector.controllers;

import com.eyetyrantdesign.collector.models.User;
import com.eyetyrantdesign.collector.models.data.UserRepository;
import com.eyetyrantdesign.collector.models.dto.RegistrationFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
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
  public Iterable<User>getAll() {return userRepository.findAll();}

  @GetMapping("reg/{id}")
  @ResponseBody
  public Optional<User> getUserById(@PathVariable Integer id) {return userRepository.findById(id);}

  @PostMapping("reg")
  public String processRegistrationForm(@RequestBody @Valid RegistrationFormDTO registrationFormDTO,
                                         Errors errors,
                                         HttpServletRequest request) {

    if (errors.hasErrors()) {
      System.out.println(errors);
      return "reg";
    }

    User existingUser = userRepository.findByUserName(registrationFormDTO.getUserName());

    if (existingUser != null) {
      errors.rejectValue("userName", "userName.exists", "Already exists");
      return "reg";
    }

    String password = registrationFormDTO.getPassword();
    String verifyPassword = registrationFormDTO.getVerifyPassword();

    if (!password.equals(verifyPassword)) {
      errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
      return "reg";
    }

    User newUser = new User(registrationFormDTO.getFirstName(),
                            registrationFormDTO.getLastName(),
                            registrationFormDTO.getUserName(),
                            registrationFormDTO.getPassword());
    userRepository.save(newUser);
    setUserInSession(request.getSession(), newUser);

    return ""; // can I redirect to users list page here?
                // PUTTING ANY VALUE HERE WILL CAUSE UNEXPECTED TOKEN IN JSON ERRORS
                // AS RETURNING TEXT NOT JSON IN RESPONSE
  }
}
