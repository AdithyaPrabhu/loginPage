import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
