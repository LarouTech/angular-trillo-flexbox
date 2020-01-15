import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { HotelViewComponent } from './content/hotel-view/hotel-view.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [    AppComponent, HeaderComponent, SidebarComponent, HotelViewComponent, ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
