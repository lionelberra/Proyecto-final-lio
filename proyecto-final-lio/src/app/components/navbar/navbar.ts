import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    standalone: true,
  imports: [RouterLink, FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  busqueda: string = '';

  constructor(private readonly router: Router) {}

  buscarArtistas(): void {
    const termino = this.busqueda.trim();
    this.router.navigate(['/productos'], {
      queryParams: { q: termino || null },
    });
  }
}
