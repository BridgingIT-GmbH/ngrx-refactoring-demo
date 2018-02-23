import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { MatListModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ScheduleComponent } from './conference/schedule/schedule.component';
import { ConferenceService } from './conference/conference.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
