import { Component } from '@angular/core';
import { Menu } from 'src/app/constants/interface';
import { DialogService } from 'src/app/service/dialog.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent {
  constructor(
    private orderService: OrderService,
    private dialogService: DialogService
  ) {
    console.log(this.orders);
  }
  public get totale() {
    return this.orderService.amount();
  }
  public get orders() {
    return this.orderService.order;
  }
  displayOrderDialog() {
    this.dialogService.openDialog(this.orders, this.totale);
  }
}
