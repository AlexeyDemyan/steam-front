import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppidsListComponent } from './appids-list/appids-list.component';
import { AppsListComponent } from './apps-list/apps-list.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'appidslist',
    component: AppidsListComponent,
    title: 'AppIDs List',
  },
  {
    path: 'appslist',
    component: AppsListComponent,
    title: 'Apps List',
  },
];

export default routeConfig;
