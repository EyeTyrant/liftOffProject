// REGISTRATION DIALOG FORM

import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";

import { UserService } from "../user.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { User } from "../user";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationFormComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private frmBldr: FormBuilder,
    private userService: UserService,
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegistrationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.regForm = this.frmBldr.group({
      id: this.data ? this.data.id : "",
      firstName: this.data ? this.data.firstName : "",
      lastName: this.data ? this.data.lastName : "",
      userName: this.data ? this.data.userName : "",
      password: this.data ? this.data.password : "",
      verifyPassword: this.data ? this.data.password : "",
    });
  }

  // RESETS DIALOG FORM ON CLOSE
  onClose() {
    this.regForm.reset();
    this.dialogRef.close();
  }
}