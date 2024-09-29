import { ItemAcervo } from "./ItemAcervo";

export class Midia extends ItemAcervo{
    private duracao: number;

    constructor(titulo: string, autor: string, ano: number, localizacao: string, duracao: number){
        super(titulo, autor, ano, localizacao);
        this.duracao = duracao;
    }

    getDescricao(): string {
        return `${this._titulo}, publicado por ${this._autor} no ano de ${this._ano}. Duração: ${this.duracao}.\nLocalização: ${this._localizacao}, atualmente ${this.getDisponivel()?'disponível':'não disponível'}.`
    }

    setDuracao(novaDuracao: number): void {
        this.duracao = novaDuracao;
    }
}