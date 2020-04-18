// Edit Item Dialog Form

import { Component, OnInit, Inject } from "@angular/core";

import { CollectorService } from "../collector.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Observable } from "rxjs";
import { DieCast } from "../collection";
import { MatDisplayComponent } from "../mat-display/mat-display.component";

@Component({
  selector: "app-input-form",
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.css"],
})
export class InputFormComponent implements OnInit {
  // inputForm = this.collectorService.inputForm;
  inputForm: FormGroup;
  dieCast: DieCast;
  constructor(
    private frmBldr: FormBuilder,
    private collectorService: CollectorService,
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<InputFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    // this.inputForm = data.inputForm;
  }

  ngOnInit() {
    this.inputForm = this.frmBldr.group({
      id: this.data ? this.data.id : "",
      year: this.data ? this.data.year : "",
      name: this.data ? this.data.name : "",
      brand: this.data ? this.data.brand : "",
      mfr: this.data ? this.data.mfr : "",
      // id: [this.data.id],
      // year: [this.data.year],
      // name: [this.data.name],
      // brand: [this.data.brand],
      // mfr: [this.data.mfr],
    });
  }

  onSubmit() {
    if (!this.inputForm.get("id").value) {
      this.createItem();
    } else {
      this.editItem(this.inputForm.value);
    }
  }

  // CLICK SUBMIT TO ADD NEW ROW OR UPDATE ROW DATA AND CLOSE DIALOG
  createItem() {
    // if (this.inputForm.valid) {
    this.collectorService
      .addItem(this.inputForm.value)
      .subscribe((response) => {
        console.log("Success", response);
      });
    this.inputForm.reset();
    this.onClose();
    // }
  }

  // CLICK SUBMIT TO UPDATE DATABASE ROW
  editItem(dieCast: DieCast): void {
    this.collectorService
      .updateItem(dieCast.id, dieCast)
      .subscribe((response) => {
        console.log("Success", response);
      });
    this.inputForm.reset();
    this.dialogRef
      .afterClosed()
      .subscribe((val) => console.log("Dialog output", val));
  }

  // RESETS DIALOG FORM ON CLOSE
  onClose() {
    this.inputForm.reset();
    this.dialogRef.close();
  }
}
