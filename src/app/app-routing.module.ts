import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
 {path: '',component:InicioComponent},
 {path: 'carrito',component:CarritoComponent} , 
 {path:'info',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
