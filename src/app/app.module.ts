import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './about-us/profile/profile.component';
import { TeamComponent } from './about-us/team/team.component';
import { ContactComponent } from './about-us/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProfileComponent,
    TeamComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
