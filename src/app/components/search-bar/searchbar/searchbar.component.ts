import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
@Output()search : EventEmitter<string>=new EventEmitter<string>()
find(event:any){
  this.search.emit(event.target.value)

}
}
