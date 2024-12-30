function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //feito uma cópia do array alterando apenas o parametro preco
    });
    return livrosComDesconto;
}