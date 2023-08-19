import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';

const rotte: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'order',
    component: FavouriteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteComponent,
    NavbarComponent,
    CardComponent,
    SnackbarComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rotte),
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
