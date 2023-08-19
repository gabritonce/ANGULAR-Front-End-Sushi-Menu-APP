import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { Menu } from '../constants/interface';
import { menu } from '../constants/menuArray';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog : MatDialog
  ) { }

  openDialog(order:Menu[], totale:number){
    this.dialog.open(DialogComponent, {
      data:{
        order:order,
        totale: totale
      },
      width: '400px',
      maxHeight: '500px',
    })

  }
}
