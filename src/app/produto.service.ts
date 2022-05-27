import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getProdutos() : Observable<Produto[]> {
    return this.http.get<any>(`${this.urlBase}/products`);
  }

  public getProdutoPorId(id: number) : Observable<Produto> {
    return this.http.get<any>(`${this.urlBase}/products/${id}`);
  }
}
