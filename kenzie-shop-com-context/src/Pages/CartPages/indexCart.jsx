import { useHistory } from "react-router-dom";
import { useCart } from "../../Provider/cartProvider";
import { Button } from "../../Components/Button/indexButton";
import { DivCartPageContainer } from "./styledCart";

export const CartPages = () => {
  const history = useHistory();
  const { cart, addQuantidade, removeQuantidade } = useCart();

  return (
    <DivCartPageContainer>
      <div>
        <h1>Mangá shop</h1>
        <button title="Página Inicial" onClick={() => history.push("/")}>
          Voltar
        </button>
      </div>
      <div>
        <div>
          <div>
            <h2>Meu carrinho</h2>
          </div>
          <div>
            {cart.length === 0 ? (
              <div className="vazio">
                <div>
                  <p className="semItems">Sem itens no carrinho!</p>
                </div>
                <div>
                  <p>Adicione itens.</p>
                </div>
              </div>
            ) : (
              cart.map((item, index) => (
                <div className="teste" key={index}>
                  <div>
                    <img src={item.img} alt={item.name} />
                    <hr />
                  </div>
                  <small>
                    Título: <em> {item.name}</em>
                  </small>
                  <div>R$ {item.price.toFixed(2)}</div>
                  <div>
                    <div className="botoesAdd">
                      <Button
                        title="Adicionar"
                        className="green"
                        onClick={() => addQuantidade(item)}
                      >
                        +
                      </Button>
                      <Button
                        title="Remover"
                        className="red"
                        onClick={() => removeQuantidade(item)}
                      >
                        -
                      </Button>
                    </div>
                    <div>
                      <p>Na Sacola:{item.qtde}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
            <p className="preco">
              Valor Total:{" "}
              <b>
                R$
                {cart.length > 0 &&
                  cart
                    .reduce(
                      (valorAtual, valorAnterior) =>
                        valorAtual + valorAnterior.price * valorAnterior.qtde,
                      0
                    )
                    .toFixed(2)}
              </b>
            </p>
          </div>
        </div>
      </div>
    </DivCartPageContainer>
  );
};
export default CartPages;
