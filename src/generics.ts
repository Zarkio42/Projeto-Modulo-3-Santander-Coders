import { ItemAcervo } from "./model/ItemAcervo";

export function adcionarItem<T extends ItemAcervo>(acervo: T[], item: T): void {
    try {
        acervo.push(item);
        console.log(`${item.getTitulo()} adicionado à Biblioteca com sucesso!`);
    }
    catch (error) {
        console.log(`Erro ao adicionar item: ${error}`);
    }
}