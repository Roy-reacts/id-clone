import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FpComponent } from './components/fp/fp.component';
import { LnComponent } from './components/ln/ln.component';
import { QlComponent } from './components/ql/ql.component';
import { WcComponent } from './components/wc/wc.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlComponent } from './components/bl/bl.component';

@NgModule({
  declarations: [
    AppComponent,
    FpComponent,
    LnComponent,
    QlComponent,
    WcComponent,
    FooterComponent,
    BlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
