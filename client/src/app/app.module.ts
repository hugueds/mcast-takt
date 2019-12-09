import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigComponent } from './Containers/big/big.component';
import { SmallComponent } from './Containers/small/small.component';
import { ConfigComponent } from './Containers/config/config.component';
import { StatusBarComponent } from './Components/status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BigComponent,
    SmallComponent,
    ConfigComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
