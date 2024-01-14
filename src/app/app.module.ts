import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { TodoComponent } from './components/todo/todo.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { GalleryModule } from '@ks89/angular-modal-gallery';
//yea i know, typically material would be in a shared module but this is a small app
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    TodoComponent,
    WeddingPartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    GalleryModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
