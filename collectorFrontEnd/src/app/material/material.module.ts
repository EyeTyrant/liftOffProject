import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule
} from "@angular/material";

const material = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
