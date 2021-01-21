import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NewsApiModule } from './news-api/news-api.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    NewsApiModule,
    HttpClientModule,
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
