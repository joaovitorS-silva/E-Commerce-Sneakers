function CardCarrinho({produto}) {
  return (
    <div>
      <article className="bg-loja-card  p-10 flex-1 flex items-center justify-between  rounded-md m-11">
        <div>
          <h1>produto e serviço</h1>
          <hr />
          <h2>{produto.marca}</h2>
          <p>{produto.descricao}</p>
          <span>preco à vista no PIX:</span>
          <span></span>
          
        </div>
      </article>
    </div>
  );
}
export default CardCarrinho;
