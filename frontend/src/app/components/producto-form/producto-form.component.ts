import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto: any = { nombre: '', descripcion: '', precio: 0, stock: 0 };
  idProducto: number | null = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idProducto = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idProducto) {
      this.productoService.getProductos().subscribe(productos => {
        this.producto = productos.find( p => p.id === this.idProducto) || this.producto;
      });
    }
  }

  guardarProducto(): void {
    if (this.idProducto) {
      this.productoService.updateProducto(this.idProducto, this.producto).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.productoService.addProducto(this.producto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
