import { Publicacao } from "./Publicacao";

export class Livro extends Publicacao{
    private isbn: string;

    constructor(titulo:string, autor: string, ano: number, localizacao: string, editora: string, isbn: string){
        super(titulo, autor, ano, localizacao, editora);
        this.isbn = isbn;
    }

    getDescricao(): string {
        return `${super.getDescricao()}\nIsbn: ${this.isbn}`
    }

    setIsbn(novoIsbn: string): void{
        this.isbn = novoIsbn;
    }
}