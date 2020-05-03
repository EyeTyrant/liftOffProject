import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource,
  MatSort,
} from "@angular/material";
import { UserService } from "../user.service";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { DieCastInputFormComponent } from "../diecast-input-form/diecast-input-form.component";
import { AutofillMonitor } from "@angular/cdk/text-field";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {}

  openReg() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegistrationFormComponent, {
      minWidth: "500px",
      height: "auto",
      panelClass: "reg-dialog",
      backdropClass: "reg-dialog-backdrop",
    });
  }
}
