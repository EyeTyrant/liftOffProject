package com.eyetyrantdesign.collector.controllers;

import com.eyetyrantdesign.collector.models.DieCast;
import com.eyetyrantdesign.collector.models.data.DieCastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CollectorController {

  @Autowired
  private DieCastRepository dieCastRepository;


  @RequestMapping("diecast")
  @ResponseBody
  public String index(){
    return "index";
  }


  @GetMapping("diecast/list")
  @ResponseBody
  public Iterable<DieCast> listAll(){
    return dieCastRepository.findAll();
  }

  @GetMapping("diecast/list/{id}")
  @ResponseBody
  public Optional<DieCast> getItemById(@PathVariable Integer id){
    return dieCastRepository.findById(id);
  }

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