import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PasswordComponent } from './password/password.component';
import { FormsModule } from '@angular/forms';
import { CreatePasswordComponent } from './create-password/create-password.component'; // Adicionado para poder usar o ngModel

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    FeedPageComponent,
    ComunityPageComponent,
    NewAccountPageComponent,
    RecoverPageComponent,
    UserPageComponent,
    PasswordComponent,
    CreatePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicionado para poder usar o ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
