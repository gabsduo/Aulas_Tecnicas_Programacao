import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699.9,
      descricao: 'Caneta caras demais. Deus me livre.',
      imageUrl: 'images/mounjaro.jpg',
      promo: false,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Ozempic',
      preco: 1299.94,
      descricao: 'Continuam caras. Deus continue me livrando.',
      imageUrl: 'images/ozempic.jpg',
      promo: false,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'Wegovy',
      preco: 2500.00,
      descricao: 'Misericórdia. Deus foi para Floripa?',
      imageUrl: 'images/wegovy.jpeg',
      promo: true,
      estado: 'esgotado'
    },
    {
      id: 4,
      nome: 'Novalgina',
      preco: 17.90,
      descricao: 'Dor de cabeça? Dor de dente? Dor de barriga? Novalgina resolve.',
      imageUrl: 'images/novalgina.jpeg',
      promo: false,
      estado: 'novo'
    },
  ];

  listar(): Observable<Produto[]>{
    
    this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos")
    return of(this.listaMock).pipe(
      delay(250)
    );
  }

}
