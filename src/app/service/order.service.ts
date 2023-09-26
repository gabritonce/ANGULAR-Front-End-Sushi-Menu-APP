import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Menu } from '../constants/interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Menu[] = [];
  totale = 0;
  constructor(private snackservice: SnackbarService) {}

  addMyOrder(item: Menu) {
    const index = this.order.findIndex((elem) => item.id == elem.id);
    if (index == -1) {
      const orderItem = {
        id: item.id,
        titolo: item.titolo,
        prezzo: item.prezzo,
        img: item.img,
        qty: 1,
      };
      this.order.push(orderItem);
    } else {
      const oldItem = this.order.find((elem) => item.id == elem.id);
      /*const newItem = {
        id: item.id,
        titolo: item.titolo,
        prezzo: oldItem.prezzo + item.prezzo,
        img: item.img,
        qty: oldItem.qty + 1,
      };
      this.order.splice(index, 1, newItem);*/
      this.order[index].qty = oldItem.qty + 1;
      this.order[index].prezzo = oldItem.prezzo + item.prezzo;
    }

    const message: string = item.titolo + ' added to your order';

    this.snackservice.openSnackBar(message, item.img);
  }

  deleteOrder(item: Menu) {
    const index = this.order.findIndex((elem) => elem.id == item.id);
    if (item.qty > 1) {
      const originalPrice = item.prezzo / item.qty;
      this.order[index].qty = item.qty - 1;
      this.order[index].prezzo = item.prezzo - originalPrice;
    } else {
      this.order.splice(index, 1);
    }

    const message: string = item.titolo + ' removed from the order';

    this.snackservice.openSnackBar(message, item.img);
  }

  amount() {
    const priceArray: number[] = this.order.map((elem) => {
      return elem.prezzo;
    });
    return priceArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue
    );
  }
}
