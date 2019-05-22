import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBedComponent } from './test-bed/test-bed.component';
import { RunesComponent } from './components/runes/runes.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBedComponent,
    RunesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
