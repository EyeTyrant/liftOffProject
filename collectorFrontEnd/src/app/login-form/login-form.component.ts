// LOGIN DIALOG FORM

import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";

import { UserService } from "../user.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../user";
import { Observable } from "rxjs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private frmBldr: FormBuilder,
    private userService: UserService,
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.loginForm = this.frmBldr.group({
      // id: this.data ? this.data.id : "",
      userName: this.data ? this.data.userName : "",
      password: this.data ? this.data.password : "",
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.userService.submitLoginInput(this.loginForm.value).subscribe(
        (response) => {
          console.log(
            "%cThis is user",
            "color: green; font-size: 20px",
            response // return statement from successful login is null (empty string (return "";))
          );
        },
        (error: any) => {
          console.log(
            "%cERROR !! ERROR",
            "color: orangered; font-size: 25px",
            this.loginForm.value,
            error
          );
        }
      );
    }
  }

  // RESETS DIALOG FORM ON CLOSE
  onClose() {
    this.loginForm.reset();
    this.dialogRef.close();
  }
}
