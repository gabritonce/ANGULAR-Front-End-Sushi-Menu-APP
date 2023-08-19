import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { Menu } from '../constants/interface';
import { menu } from '../constants/menuArray';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackBar(titolo:string, img?:string) {
    this.snackbar.openFromComponent(SnackbarComponent,  {
      data: {
        message: titolo,
        img : img,
      },
      duration: 2000,
      panelClass: ["blue-snackbar"]
  })
  }
}
