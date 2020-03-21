import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatIconModule
} from "@angular/material";

const material = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatIconModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
