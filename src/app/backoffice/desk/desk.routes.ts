// native modules
import { Routes } from '@angular/router';

// components
import { AgendaComponent } from './agenda/agenda.component';
import { CheckinComponent } from './checkin/checkin.component';

// guards

export const DESK_ROUTES: Routes = [
  { path: 'desk', component: AgendaComponent },
  { path: 'desk/agenda', component: AgendaComponent },
  { path: 'desk/checkin', component: CheckinComponent }
];
