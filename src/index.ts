import { Biblioteca } from "./model/Biblioteca";
import { Revista } from "./model/Revista";
import { Livro } from "./model/Livro";
import { Cd } from "./model/Cd";
import { Dvd } from "./model/Dvd";
import { ItemAcervo } from "./model/ItemAcervo";

const prompt = require('prompt-sync')();

const biblioteca = new Biblioteca();

const asciiArt = `
      _.--._  _.--._
,-=.-":;:;:;\\':;:;:;"-._
\\\\\\:;:;:;:;:;\\:;:;:;:;:;\\
 \\\\\\;:;:;:;:;:;\\:;:;:;:;:;\\
  \\\\\\;:;:;:;:;:;\\:;:;:;:;:;\\
   \\\\\\;:;:;:;:;:;\\:;::;:;:;:\\
    \\\\\\;:;::;:;:;\\:;:;:;::;:\\
     \\\\\\;;:;:_:--:\\:_:--:_;:;\\
      \\\\\\_.-"      :      "-._\\
       \`_..--""--.;.--""--.._=>`;

console.log(`Bem Vindo à Biblioteca Online!\n${asciiArt}\ndigite qualquer tecla para acessar...`);
prompt();

while (true) {

    console.log('Digite a opção desejada:\n1. Cadastrar Item\n2. Editar Item\n3. Remover Item\n4. Listar Todos os Itens\n5. Pegar Emprestado\n6. Devolver Item\n7. Sair');
    const opcao = prompt('\nOpção: ');

    switch (opcao) {
        case '1':

            console.log('\nQual tipo de Item você deseja cadastrar?\n1. Livro\n2. Revista\n3. CD\n4. DVD');
            const tipoDeItem = prompt();

            switch (tipoDeItem) {
                case '1':
                    const tituloLivro = prompt('Título: ');
                    const autorLivro = prompt('Autor: ');
                    const anoPublicacaoLivro = prompt('Ano de Publicação: ');
                    const localizacaoLivro = prompt('Localização: ');
                    const editoraLivro = prompt('Editora: ');
                    const isbn = prompt('ISBN: ');
                    const livro = new Livro(tituloLivro, autorLivro, anoPublicacaoLivro, localizacaoLivro, editoraLivro, isbn);

                    biblioteca.registrarItem(livro);
                    break;
                case '2':
                    const tituloRevista = prompt('Título: ');
                    const autorRevista = prompt('Autor: ');
                    const anoPublicacaoRevista = prompt('Ano de Publicação: ');
                    const localizacaoRevista = prompt('Localização: ');
                    const editoraRevista = prompt('Editora: ');
                    const nEdicao = prompt('Edição: ');
                    const revista = new Revista(tituloRevista, autorRevista, anoPublicacaoRevista, localizacaoRevista, editoraRevista, nEdicao);

                    biblioteca.registrarItem(revista);
                    break;

                case '3':
                    const tituloCD = prompt('Título: ');
                    const autorCD = prompt('Artista: ');
                    const anoPublicacaoCD = prompt('Ano de Publicação: ');
                    const localizacaoCD = prompt('Localização: ');
                    const duracaoCD = prompt('Duração: ');
                    const cd = new Cd(tituloCD, autorCD, anoPublicacaoCD, localizacaoCD, duracaoCD);

                    biblioteca.registrarItem(cd);
                    break;

                case '4':
                    const tituloDVD = prompt('Título: ');
                    const autorDVD = prompt('Artista: ');
                    const anoPublicacaoDVD = prompt('Ano de Publicação: ');
                    const localizacaoDVD = prompt('Localização: ');
                    const duracaoDVD = prompt('Duração: ');
                    const dvd = new Dvd(tituloDVD, autorDVD, anoPublicacaoDVD, localizacaoDVD, duracaoDVD);

                    biblioteca.registrarItem(dvd);
                    break;

                default:
                    console.log('\nOpção Inválida');
            }
            break;

        case '2':
            console.log('\nQual dos itens da biblioteca você deseja editar?\n');
            biblioteca.listarItens();

            const itemEditar = parseInt(prompt('\nDigite o índice: '));
            const novoTitulo = prompt('Novo título: ');
            const novoAutor = prompt('Novo autor: ');
            const novoAno = prompt('Novo ano de publicação: ');
            const novaLoc = prompt('Nova localização: ');
            const novaDuracao = prompt('Nova duração: (Deixe em branco se não houver)');
            const novaEditora = prompt('Nova editora: (Deixe em branco se não houver)');
            const novoIsbn = prompt('Novo Isbn: (Deixe em branco se não houver)');
            const novoNumEdicao = prompt('Novo número de edição: (Deixe em branco se não houver)');

            biblioteca.editarItem(itemEditar, novoTitulo, novoAutor, novoAno, novaLoc, novaDuracao, novaEditora, novoIsbn, novoNumEdicao);

            break;

        case '3':
            console.log('\nQual dos itens da biblioteca você deseja remover?\n');
            biblioteca.listarItens();

            const itemRemover = parseInt(prompt('\nDigite o índice: '));
            biblioteca.removerItem(itemRemover);

            break;

        case '4':
            biblioteca.listarItens();
            break;

        case '5':
            console.log("\nEscolha qual dos itens da Biblioteca você gostaria de pegar emprestado: \n");
            biblioteca.listarItens();
            
            const itemEmprestar = parseInt(prompt('\nDigite o índice: '));
            biblioteca.emprestarItem(itemEmprestar);
            break;

        case '6':
            console.log('\nEscolha qual dos itens da Biblioteca você gostaria de devolver: \n');
            biblioteca.listarItens();

            const itemDevolver = parseInt(prompt('Digite o índice: '));
            biblioteca.devolverItem(itemDevolver);
            break;

        case '7':
            console.log('\nSaindo...\n')
            break;
        
        default:
            console.log('\nOpção Inválida!\n');
            break;

    }

    if(opcao == 7){ break; }
}