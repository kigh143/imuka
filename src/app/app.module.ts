import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainmenuComponent } from "./components/mainmenu/mainmenu.component";
import { FeedsComponent } from "./components/feeds/feeds.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ForgotpassComponent } from "./components/forgotpass/forgotpass.component";
import { VerifyComponent } from "./components/verify/verify.component";

const app_routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "verify", component: VerifyComponent },
  { path: "forgotPassword", component: ForgotpassComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    FeedsComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    VerifyComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(app_routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
