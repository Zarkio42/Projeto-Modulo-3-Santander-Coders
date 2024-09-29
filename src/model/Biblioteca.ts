import { ItemAcervo } from "./ItemAcervo";
import { adcionarItem } from '../generics';
import { Revista } from "./Revista";
import { Cd } from "./Cd";
import { Dvd } from "./Dvd";
import { Livro } from "./Livro";

export class Biblioteca {
    private acervo: ItemAcervo[] = [];

    registrarItem<T extends ItemAcervo>(item: T): void {
        adcionarItem(this.acervo, item);
    }

    editarItem(indice: number, novoTitulo?: string, novoAutor?: string, novoAno?: number, novaLocalizacao?: string, novaDuracao?: number, novaEditora?: string, novoIsbn?: string, novoNumEdicao?: number): void {
        if (indice >= 0 && indice < this.acervo.length) {
            const item = this.acervo[indice];

            if (novoTitulo) {
                item.setTitulo(novoTitulo);
            }
            if (novoAutor) {
                item.setAutor(novoAutor);
            }
            if (novoAno) {
                item.setAno(novoAno);
            }
            if (novaLocalizacao) {
                item.setLocalizacao(novaLocalizacao);
            }

            if (item instanceof Cd || item instanceof Dvd) {
                if (novaDuracao) {
                    item.setDuracao(novaDuracao);
                }
            }

            if (item instanceof Livro || item instanceof Revista) {
                if (novaEditora) {
                    item.setEditora(novaEditora);
                }
                if (item instanceof Livro) {
                    if (novoIsbn) {
                        item.setIsbn(novoIsbn);
                    }
                }
                if (item instanceof Revista) {
                    if (novoNumEdicao) {
                        item.setNumeroEdicao(novoNumEdicao);
                    }
                }
            }

            console.log(`${item.getTitulo()} foi atualizado com sucesso!`);
        } else {
            console.log('Índice inválido!');
        }
    }

    removerItem(indice: number): void {

        if (indice >= 0 && indice < this.acervo.length) {

            let itemRemovido = this.acervo.splice(indice, 1);
            console.log(`${itemRemovido[0].getTitulo()} removido da Biblioteca com sucesso!`);
        }
        else {
            console.log(`Indice inválido!`);
        }
    }

    listarItens(): void {
        this.acervo.forEach((item, index) => console.log(`\n${index}: ${item.getDescricao()}\n`));
    }

    emprestarItem(indice: number): void {
        if (indice >= 0 && indice < this.acervo.length) {
            const item = this.acervo[indice];
            if (item.getDisponivel()) {
                item.setDisponivel(false);
                console.log(`Item "${item.getTitulo()}" emprestado com sucesso!`);
            } else {
                console.log(`O item "${item.getTitulo()}" já está emprestado.`);
            }
        } else {
            console.log('Índice inválido!');
        }
    }

    devolverItem(indice: number): void {
        if (indice >= 0 && indice < this.acervo.length) {
            const item = this.acervo[indice];
            if (!item.getDisponivel()) {
                item.setDisponivel(true);
                console.log(`Item "${item.getTitulo()}" devolvido com sucesso!`);
            } else {
                console.log(`O item "${item.getTitulo()}" já está disponível.`);
            }
        } else {
            console.log('Índice inválido!');
        }
    }
}