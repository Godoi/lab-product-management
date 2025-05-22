import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = '/api/products'; // Mock

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return of([
      { id: 1, name: 'Notebook', price: 3000, categoryId: 1 },
      { id: 2, name: 'Smartphone', price: 1500, categoryId: 1 },
    ]);
  }
}
