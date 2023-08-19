import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/constants/interface';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 @Input()menuItem: Menu = null
 @Input()isOrderList : boolean = false
 constructor(
  private orderService : OrderService
 ){

 }

 onAddOrder(){
  this.orderService.addMyOrder(this.menuItem)
 }
 onDeleteOrder(){
  this.orderService.deleteOrder(this.menuItem)
 }
}
