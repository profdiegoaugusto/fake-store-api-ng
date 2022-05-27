import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fake-store-api-ng';

  public produtos: Produto[] = [];
  public produto: Produto | undefined;
  public idProduto: number = -1;

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'action'];


  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }


  public getProdutos() : void {

    this.produtoService.getProdutos().subscribe({

      next: (response: Produto[]) => {
        this.produtos = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }

    });

  }

  public getProdutoPorId() : void {

    this.produtoService.getProdutoPorId(this.idProduto).subscribe({

      next: (response: Produto) => {
        this.produto = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);  
      }

    });
    
  }



}
