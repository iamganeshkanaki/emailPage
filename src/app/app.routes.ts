import { Routes } from '@angular/router';

import { MyRegistrformComponent } from './my-registrform/my-registrform.component';
import { FieldListComponent } from './fieldlist/fieldlist.component';
import { FieldUpdateComponent } from './field-update/field-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    { path: 'register', component: MyRegistrformComponent },
    { path: 'list', component: FieldListComponent },
    { path: 'update/:id', component: FieldUpdateComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '**', component: NotFoundComponent },
];
