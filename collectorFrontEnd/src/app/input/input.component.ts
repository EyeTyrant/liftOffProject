import { Component, OnInit } from "@angular/core";
// import { FormGroup, FormControl } from "@angular/forms"; // replaced by formBuilder
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  dieCastInputForm: FormGroup;

  constructor(private frmBldr: FormBuilder) {}

  ngOnInit() {
    this.dieCastInputForm = this.frmBldr.group({
      releaseYear: [""],
      name: [""],
      brand: [""],
      manufacturer: [""]
    });
  }

  // added to constructor parameters and replaced by formBuilder

  // dieCastInputForm = new FormGroup({
  //   releaseYear: new FormControl(""),
  //   name: new FormControl(""),
  //   brand: new FormControl(""),
  //   manufacturer: new FormControl("")
  // });
}
