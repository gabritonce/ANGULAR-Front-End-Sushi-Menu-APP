import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/service/order.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private orderService: OrderService,
  private snackbarService: SnackbarService,
  public dialogRef: MatDialogRef<DialogComponent>,){}

sendOrder(){
this.orderService.order = [];
this.orderService.totale = 0;
this.snackbarService.openSnackBar("The order has been sent")
this.dialogRef.close()
}
}
