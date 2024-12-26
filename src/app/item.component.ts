import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Item {
  id: number;
  val: string;
  done: boolean;

  constructor(val: string) {
    this.val = val;
    this.done = false;
    this.id = Math.random();
  }
}

@Component({
  selector: "item-app",
  imports: [FormsModule],
  template: `
      <div>
          <!-- <p>
              <label>Введите</label><br>
              <input [(ngModel)]="text" />
          </p> -->
            <button (click)="addItem(text)">➕Добавить</button>
      </div>
      <table>
          <thead>
              <tr>
                  <th>Сделано</th>
                  <th>Дела</th>
              </tr>
          </thead>
          <tbody>
          @for (item of items; track item.val) {
              <tr>
                <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                <td>{{item.val}}</td>
                <td><button (click)="delItem($index)">❌Удалить</button></td>
                <td> @if(item.done) {✅ Исполнено} </td>
              </tr>
          }
          </tbody>
      </table>
      <button (click)="delComplited()">Удалить выбранные</button>
      `
})
export class ItemComponent {
  @Input() text: string = "";
  items: Item[] =
    [
      { val: "Написать проект", done: true, id: 2 },
      { val: "Купить подарки", done: false, id: 11 }

    ];

  @Output() out = new EventEmitter;


  public addItem(text: string): void {
    if (text == null || text.trim() == "")
      return;
    this.items.push(new Item(text));
    this.out.emit(this.items);
  }

  delItem(index: number): void {
    console.log(index);
    this.items.splice(index, 1);
  };


  delComplited(): void {
    [...this.items].map((el) => {
      if (el.done === true) {
        this.items.splice(this.items.indexOf(el), 1);
      }
      console.log(el);
    })
  };


}  
