package com.eyetyrantdesign.collector.controllers;

import com.eyetyrantdesign.collector.models.DieCast;
import com.eyetyrantdesign.collector.models.User;
import com.eyetyrantdesign.collector.models.data.DieCastRepository;
import com.eyetyrantdesign.collector.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CollectorController {

  @Autowired
  private DieCastRepository dieCastRepository;

  @Autowired
  private UserRepository userRepository;
  private DieCast diecast;

  @RequestMapping("diecast")
  @ResponseBody
  public String index(){
    return "index";
  }

  @GetMapping("diecast/list")
  @ResponseBody
  public Iterable<DieCast> listAllItems() {
    return dieCastRepository.findAll();
  }

  @GetMapping("diecast/list/{user_id}")
  @ResponseBody
  public Iterable<DieCast> listAllUserItems(@PathVariable Integer user_id){
    Optional<User> aUser = userRepository.findById(user_id);
    if(aUser.isPresent()){
      System.out.println(aUser.get());
    }
      return dieCastRepository.findAllById(user_id);
  }

// TO GET A SINGLE DIECAST BY ITS ID (NOT NEEDED? CONFLICTS WITH listAllUserItems())
//  @GetMapping("diecast/list/{id}")
//  @ResponseBody
//  public Optional<DieCast> getItemById(@PathVariable Integer id){
//    return dieCastRepository.findById(id);
//  }

  @PostMapping("diecast/list")
  public DieCast addItem(@RequestBody DieCast newDieCast){
    return dieCastRepository.save(newDieCast);
  }

  @DeleteMapping("diecast/list/{id}")
  public void deleteItemById(@PathVariable("id") Integer id) {
   dieCastRepository.deleteById(id);
  }

  @PatchMapping("diecast/list/{id}")
  public DieCast updateItem(@RequestBody DieCast editDieCast) {
    return dieCastRepository.save(editDieCast);
  }
}