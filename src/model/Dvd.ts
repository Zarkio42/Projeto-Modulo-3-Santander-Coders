import { Midia } from "./Midia";

export class Dvd extends Midia{

    constructor(titulo:string, autor: string, ano: number, localizacao: string, duracao: number){
        super(titulo, autor, ano, localizacao, duracao);
    }

    getDescricao(): string {
        return `${super.getDescricao()}\nAutor: ${this._autor}`;
    }
}