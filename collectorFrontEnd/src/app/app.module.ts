import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InputComponent } from "./input/input.component";
import { DisplayComponent } from "./display/display.component";
import { CollectorService } from "./collector.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { MatDisplayComponent } from "./mat-display/mat-display.component";
import { InputFormComponent } from "./input-form/input-form.component";
import { MatGridListModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    DisplayComponent,
    MatDisplayComponent,
    InputFormComponent
  ],
  entryComponents: [InputFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatGridListModule
  ],
  providers: [CollectorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
