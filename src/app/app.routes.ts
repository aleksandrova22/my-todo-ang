import { Routes } from '@angular/router';
import { HomeComponent } from './main.component'; 
import { MainComponent } from './main.component';


export const routes: Routes = [
  
        { path: '', component: HomeComponent},
        { path: 'todo', component: MainComponent },
      
];
