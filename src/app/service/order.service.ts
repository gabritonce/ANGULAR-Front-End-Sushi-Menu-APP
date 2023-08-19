import { inject, Injectable } from '@angular/core';
import { Menu } from '../constants/interface';
import { SnackbarService } from './snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Menu[] = []
  totale = 0;
  constructor(
    private snackservice : SnackbarService,
  ) { }

  addMyOrder(item: Menu){
    const orderItem = {
      id:Math.random(),
      titolo: item.titolo,
      prezzo: item.prezzo,
      img: item.img
    }
    const message : string = item.titolo + " added to your order"
    this.order.push(orderItem)
    this.snackservice.openSnackBar(message, item.img)
    this.totale = this.totale + item.prezzo

  }

  deleteOrder(item: Menu){
  const index =  this.order.findIndex(elem => elem.id == item.id)
    const message : string = item.titolo + " removed from the order"
    this.order.splice(index,1)
    this.snackservice.openSnackBar(message, item.img)
    this.totale = this.totale - item.prezzo
  }
}
