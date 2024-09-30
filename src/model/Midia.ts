import { ItemAcervo } from "./ItemAcervo";

export abstract class Midia extends ItemAcervo {
  protected _duracao: number;
  constructor(
    titulo: string,
    autor: string,
    ano: number,
    localizacao: string,
    duracao: number
  ) {
    super(titulo, autor, ano, localizacao);
    this._duracao = duracao;
  }

  getDescricao(): string {
    return `${this._titulo}, publicado por ${this._autor} no ano de ${
      this._ano
    }. Duração: ${this._duracao}.\nLocalização: ${
      this._localizacao
    }, atualmente ${this.Disponivel() ? "disponível" : "não disponível"}.`;
  }

  setDuracao(novaDuracao: number): void {
    this._duracao = novaDuracao;
  }
}
