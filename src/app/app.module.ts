import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { HeaderComponent } from './components/header/header.component';
import { RsocialComponent } from './components/rsocial/rsocial.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoapComponent,
    HeaderComponent,
    RsocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
