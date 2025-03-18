import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/'; // URL del backend Django

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
