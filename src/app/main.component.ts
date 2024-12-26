import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from "./item.component";

@Component({
  template: `Домашняя страница`
})
export class HomeComponent {
}

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule, ItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
 public text=''; 
 onAddItem(event:string) {
  console.log(event);
 }

}
