import { Publicacao } from "./Publicacao";

export class Revista extends Publicacao {
    private nEdicao: number;

    constructor(titulo:string, autor: string, ano: number, localizacao: string, editora: string, nEdicao: number){
        super(titulo, autor, ano, localizacao, editora);
        this.nEdicao = nEdicao;
    }

    getDescricao(): string {
        return `${super.getDescricao()}\nEdição: ${this.nEdicao}`;
    }

    setNumeroEdicao(novoNum: number): void{
        this.nEdicao = novoNum;
    }
}