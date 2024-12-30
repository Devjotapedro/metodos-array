const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosnaTela(listaDeLivros) {

    elementoParaInserirLivros.innerHTML = ''; //aparecer apenas o que a gnt filtrar

    listaDeLivros.forEach(livro => {
        let disponibilidade = verificarDisponibilidadeDoLivro(livro);
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}

function verificarDisponibilidadeDoLivro(livro){
    if (livro.quantidade > 0){
        return 'livro__imagens'
    }else{
        return 'livro__imagens indisponivel'
    }
}
  


