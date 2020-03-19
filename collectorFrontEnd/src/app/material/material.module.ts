import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";

const material = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
