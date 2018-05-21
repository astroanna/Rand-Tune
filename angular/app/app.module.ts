import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewsongComponent } from './newsong/newsong.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenubarComponent,
    NewsongComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
