import { Component } from '@angular/core';
import { Menu } from 'src/app/constants/interface';
import { menu } from 'src/app/constants/menuArray';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menu:Menu[] = menu
  result(result:string){
    console.log(result)
  }
}
