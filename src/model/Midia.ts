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
}
