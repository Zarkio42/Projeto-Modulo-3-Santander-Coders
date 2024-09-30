# Projeto-Modulo-3-Santander-Coders

Repositório dedicado ao projeto do módulo 3 do Santander Coders 2024: Programação Orientada a Objetos com TypeScript.

## Proposta

**Projeto:** Biblioteca Online com TypeScript

Este projeto consiste em desenvolver uma aplicação web que simula o sistema de gerenciamento de uma biblioteca, utilizando TypeScript para garantir a tipagem estática e a organização do código.

## Funcionalidades Principais

- **Gerenciamento do Acervo:**
  - **Cadastro de Itens:** Cadastrar diferentes tipos de itens como livros, revistas, CDs e DVDs, com informações específicas para cada tipo de item (ex: ISBN para livros, editora para revistas, duração para mídias).
  - **Localização Física:** Controlar a localização física dos itens na biblioteca (ex: estante, prateleira).
  - **Edição de Itens:** Atualizar as informações dos itens cadastrados.
  - **Remoção de Itens:** Remover itens do sistema, considerando se existem empréstimos ativos para o item.
  - **Controle de Disponibilidade:** Visualizar a disponibilidade de cada item (disponível ou emprestado).

- **Classes Principais:**
  - `ItemAcervo`, `Livro`, `Revista`, `Midia`, `CD`, `DVD`, `Biblioteca`

- **Classe Abstrata:**
  - `ItemAcervo` - Define a estrutura base para todos os itens do acervo.

- **Superclasses Intermediárias:**
  - `Publicacao` e `Midia` - Categorizam os tipos de itens de forma mais específica.

- **Interface:**
  - `Localizavel` - Implementada por classes que possuem localização física.

- **Função Genérica:**
  - `registrarItem` - Permite adicionar qualquer tipo de `ItemAcervo` ao acervo, garantindo a tipagem correta.

- **Lógica de Negócio:**
  - Implementada para garantir o funcionamento correto do sistema, incluindo validação de disponibilidade de itens.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Prompt-sync (para interações no terminal)

## Equipe

| Perfil         | Nome                        | Email                        | GitHub                          | LinkedIn                   |
|----------------|-----------------------------|------------------------------|---------------------------------|----------------------------|
| Yashina Gomes  | Yashina Gomes Maciel         | yashinagm@gmail.com           | [GitHub Yashina](https://github.com/YashinaGomes/)              | [LinkedIn Yashina](#)       |
| Mendelson Aleixo | Mendelson Aleixo e Silva    | mendelson.aleixo@gmail.com    | [GitHub Mendelson](#)            | [LinkedIn Mendelson](#)     |
| Maiane Dhienis | Maiane Dhienis               | maiababauer@gmail.com    | [GitHub Maiane](#)               | [LinkedIn Maiane](#)        |
| Pedro Cardoso  | Pedro Cardoso                | pedro.contato24@gmail.com     | [GitHub Pedro](#)                | [LinkedIn Pedro](#)         |

## Professor

| Perfil         | Nome                        | Email                        |  GitHub                          | LinkedIn                   |
|----------------|-----------------------------|------------------------------|---------------------------------|----------------------------|
| Everton da Silva | Everton da Silva           | evercan@bol.com.br            | [GitHub Everton](#)              | [LinkedIn Everton](#)       |

## Como Usar

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/usuario/projeto-modulo-3-santander-coders.git
cd projeto-modulo-3-santander-coders
npm install
npm run build
node dist/index.js
