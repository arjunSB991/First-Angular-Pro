import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LifeGoalsComponent } from './life-goals/life-goals.component';
import { ProImagesGalleryComponent } from './pro-images-gallery/pro-images-gallery.component';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { BootstrapPracticesComponent } from './bootstrap-practices/bootstrap-practices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LifeGoalsComponent,
    ProImagesGalleryComponent,
    BootstrapPracticesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedBootstrapModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
