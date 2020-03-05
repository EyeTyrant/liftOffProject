import { Component, OnInit } from "@angular/core";
// import { FormGroup, FormControl } from "@angular/forms"; // replaced by formBuilder
import { FormBuilder, FormGroup } from "@angular/forms";
import { CollectorService } from "../collector.service";
import { DieCast } from "../collection";
import { Observable } from "rxjs";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  dieCastInputForm: FormGroup;

  constructor(
    private frmBldr: FormBuilder,
    private collectorService: CollectorService
  ) {}

  // dieCast: DieCast = new DieCast();

  ngOnInit() {
    this.dieCastInputForm = this.frmBldr.group({
      year: [""],
      name: [""],
      brand: [""],
      mfr: [""]
    });
  }
  onSubmit() {
    console.log(this.dieCastInputForm.value);
    this.collectorService
      .add(this.dieCastInputForm.value)
      .subscribe(response => console.log("Success", response));
    this.dieCastInputForm.reset();
  }

  // added to constructor parameters and replaced by formBuilder

  // dieCastInputForm = new FormGroup({
  //   releaseYear: new FormControl(""),
  //   name: new FormControl(""),
  //   brand: new FormControl(""),
  //   manufacturer: new FormControl("")
  // });
}
