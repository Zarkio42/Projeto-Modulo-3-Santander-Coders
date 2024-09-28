export abstract class ItemAcervo implements Localizacao{
    protected _titulo: string;
    protected _autor: string;
    protected _ano: number;
    protected _localizacao: string;
    protected _disponivel: boolean;

    constructor(titulo:string, autor: string, ano: number, localizacao: string){
        this._titulo = titulo;
        this._autor = autor;
        this._ano = ano;
        this._localizacao = localizacao;
        this._disponivel = true;
    }

    // Método abstrato obrigatório para outras classes que herdarem. Ao chamar, ele mostra a descrição.
    abstract getDescricao(): string;

    getLocalizacao(): string {
        return this._localizacao;
    }

    setLocalizacao(localizacao: string): void {
        this._localizacao = localizacao;
    }

    Disponivel(): boolean{
        return this._disponivel;
    }

    emprestarItem(): void{
        if(this._disponivel){
            this._disponivel = false;
        }
        else{
            console.log(`O item ${this._titulo} não está disponível`);
        }
    }

    devolverItem(): void{
        this._disponivel = true;
        console.log(`Item ${this._titulo} devolvido com sucesso!`)
    }
}