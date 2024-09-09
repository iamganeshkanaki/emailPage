import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { ListEmailLogsComponent } from './list-email-logs/list-email-logs.component';
import { NotFoundComponent } from './404/404.component';
import { EmailDetailsLogComponent } from './email-details-log/email-details-log.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'emaillist',component: ListEmailLogsComponent},
    { path: 'email-page', component: EmailPageComponent},
    {path:'email-detail',component:EmailDetailsLogComponent},
    { path: '**', component: NotFoundComponent},
];
