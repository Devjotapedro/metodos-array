let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();



//await é necessário pq a requisição demora um pouco a ser feita
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    // console.table(livros);
    exibirOsLivrosnaTela(livrosComDesconto);
}

