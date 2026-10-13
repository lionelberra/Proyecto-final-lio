import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
    {path:'', component: Inicio},
    {path:'inicio', component: Inicio},
    {path:'productos', component: Productos},
    {path:'contacto', component: Contacto},
    {path:'nosotros', component: Nosotros},
    {path:'**', component: NotFound}
];
