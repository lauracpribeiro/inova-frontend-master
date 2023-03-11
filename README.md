# Inova Frontend

## Instalação

Para instalar em seu computador e rodar localmente, siga esses passos:

- Instale o Node.js e Npm, caso não tenha https://nodejs.org/en/
- Clone o repositório `git clone https://github.com/Inovacao-Unis/inova-frontend`
- Renomeie o arquivo `.env.local.example` para `.env.local` e coloque as informações em cada variável
- Instale as dependências rodando no terminal `npm install` ou `yarn`
- Inicie o servidor no terminal `npm run dev` ou `yarn dev`

Depois desses passos, acesse `http://localhost:3000`

## Alterar conteúdos

Todos os conteúdos de texto da plataforma estão na pasta `content` na raíz do projeto.
Dentro dessa pasta existem duas pastas e um arquivo:

- A pasta com nome `completa` que contém o conteúdo dos quatro planetas para trilhas completas
- A pasta com nome `maratona` que contém o conteúdo dos quatro planetas para trilhas de maratona
- O arquivo com nome `instrucoes.md` que é o conteúdo para ajuda que fica no header

Dentro das pastas existem quatro arquivos e seus nomes já representam suas ordens (um, dois, tres, quatro),
de acordo com a ordem dos planetas.
Apesar desses arquivos estarem com extensão .md, que é extensão para markdown, eles estão escritos em HTML e
possuem alguns detalhes:

- Para inserir uma imagem, é necessário colocá-la na pasta `images` que fica dentro da pasta `public` e então usar a tag img dessa forma:
  `<img src="/images/nome_do_arquivo.jpg" alt="Exemplo" />`. Note que no endereço não adicionamos a pasta `public`.
- Para inserir vídeos, basta usar o próprio código iframe fornecido por eles ou usar o exemplo abaixo substituindo o código no final, lembrando de alterar o `width` para 100%.
  Exemplo `<iframe width="100%" height="400" src="https://www.youtube.com/embed/dbhxva62f0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
- Para alterar o estilo dos conteúdos, acesse a pasta `styles`. No arquivo `content.css` existe uma classe CSS `.archive` que é referente aos conteúdos.

# Atualizar desafios

- Listar desafios: GET `http://inova-uaiinovei.herokuapp.com/challenges`

- Atualizar um desafio: PUT `http://inova-uaiinovei.herokuapp.com/challenge/id_do_desafio`
- Postman - PUT e coloca o conteúdo na aba Body, seleciona raw e muda para JSON

Exemplo

`{ "content": "<p>Algum conteúdo aqui<p>" }`

## Criar desafio

POST `http://inova-uaiinovei.herokuapp.com/challenges`

Campos necessários:

- title
- categorySlug
- content

Exemplo
`{ "title": "BDMG - Desafio 2", "categorySlug": "gestao", "content": "<p>Algum conteúdo aqui</p>" }`
