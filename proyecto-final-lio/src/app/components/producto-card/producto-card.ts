import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {

  @Input() producto!: Producto;
  
 mostrarTema = false;

  abrirTema() {
    this.mostrarTema = true;
  }

  cerrarTema() {
    this.mostrarTema = false;
  }
  
  
}
