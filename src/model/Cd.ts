import { Midia } from "./Midia";

export class Cd extends Midia {
  private _generoMusical: string;
  constructor(
    titulo: string,
    autor: string,
    ano: number,
    localizacao: string,
    duracao: number
  ) {
    super(titulo, autor, ano, localizacao, duracao);
    this._generoMusical = "";
  }

  getDescricao(): string {
    return `CD: ${this._titulo}, Artista: ${this._autor}, Ano: ${this._ano}, Genero: ${this._generoMusical}, Duração: ${this._duracao} min.`;
  }

  getGeneroMusical(): string {
    return this._generoMusical;
  }

  setGeneroMusical(generoMusical: string): void {
    this._generoMusical = generoMusical;
  }
}
