let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById('livros');

//await é necessário pq a requisição demora um pouco a ser feita
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosnaTela(livros);
}

function exibirOsLivrosnaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}