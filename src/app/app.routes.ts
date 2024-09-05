import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmailPageComponent } from './email-page/email-page.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'emailpage',component: EmailPageComponent}
];
