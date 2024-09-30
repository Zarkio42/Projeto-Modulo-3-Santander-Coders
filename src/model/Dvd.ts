import { Midia } from "./Midia";

export class Dvd extends Midia {
  private _generoFilme: string;

  constructor(
    titulo: string,
    autor: string,
    ano: number,
    localizacao: string,
    duracao: number,
    generoFilme: string
  ) {
    super(titulo, autor, ano, localizacao, duracao);
    this._generoFilme = generoFilme;
  }
  getDescricao(): string {
    return `DVD: ${this._titulo}, Diretor: ${this._autor}, Ano: ${this._ano}, Genero: ${this._generoFilme}, Duração: ${this._duracao} min.`;
  }

  generoFilme(): string {
    return this._generoFilme;
  }
  setGeneroFilme(generoFilme: string): void {
    this._generoFilme = generoFilme;
  }
}
