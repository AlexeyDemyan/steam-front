import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppidsListComponent } from './appids-list/appids-list.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'appidslist',
    component: AppidsListComponent,
    title: 'AppIDs List'
  }
];

export default routeConfig;
