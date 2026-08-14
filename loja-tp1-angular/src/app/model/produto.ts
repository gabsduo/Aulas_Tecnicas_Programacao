export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    iamgeUrl?: string;
    promo?: boolean;
}
