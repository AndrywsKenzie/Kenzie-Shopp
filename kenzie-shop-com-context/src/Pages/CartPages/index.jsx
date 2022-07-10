import { useHistory } from "react-router-dom";
import { useCart } from "../../Provider/cartProvider";
import {Button} from "../../Components/Button"

export const CartPages = () => {
  const history = useHistory();
  const { cart, addQuantidade, removeQuantidade } = useCart();

  return (
    <div>
      <div>
        <h1>Kenzie shop</h1>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
      <div>
        <div>
          <div>
            <h2>Meu carrinho</h2>
          </div>
          <div>
            {cart.length === 0 ? (
              <div>
                <div>
                  <p>Carrinho vazio !</p>
                </div>
                <div>
                  <p>Adicione itens.</p>
                </div>
              </div>
            ) : (
              cart.map((item, index) => (
                <div className="cart" key={index}>
                  <div className="inp">
                    <img src={item.img} alt={item.name} />
                    {item.name}
                  </div>
                  <>R$ {item.price.toFixed(2)}</>
                  <div className="botaoQuantidade">
                    <div>
                      <Button onClick={() => addQuantidade(item)}>+</Button>
                      <Button onClick={() => removeQuantidade(item)}>-</Button>
                    </div>
                    <>
                      <p>Quantidade:{item.qtde}</p>
                    </>
                  </div>
                </div>
              ))
            )}
            <p>
              Total : R$
              {cart.length > 0 &&
                cart
                  .reduce(
                    (valorAtual, valorAnterior) =>
                      valorAtual + valorAnterior.price * valorAnterior.qtde,
                    0
                  )
                  .toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPages;
