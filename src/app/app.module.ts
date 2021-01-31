import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { AppInterfaceComponent } from './app-interface/app-interface.component';
import { InputMenuComponent } from './input-menu/input-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    AppInterfaceComponent,
    InputMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
