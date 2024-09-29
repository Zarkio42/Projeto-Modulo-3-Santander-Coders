import { ItemAcervo } from "./ItemAcervo";

export class Publicacao extends ItemAcervo {

    private editora: string;

    constructor(titulo:string, autor: string, ano: number, localizacao: string, editora: string){
        super(titulo, autor, ano, localizacao);
        this.editora = editora;
    }

    getDescricao(): string {
        return `${this._titulo}, publicado por ${this._autor} no ano de ${this._ano}. Editora: ${this.editora}.\nLocalização: ${this._localizacao}, atualmente ${this.Disponivel()?'disponível':'não disponível'}.`;
    }
    
    setEditora(novaEditora: string): void {
        this.editora = novaEditora;
    }
}