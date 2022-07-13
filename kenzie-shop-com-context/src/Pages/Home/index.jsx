import { useContext } from "react";
import { Button } from "../../Components/Button/indexButton";
import { Header } from "../../Components/Header/indexHeader";
import { useCart } from "../../Provider/cartProvider";
import { ProdutosContext } from "../../Provider/catalogoProvider";
import { DivHomeContainer } from "./homeStyled";

const Home = () => {
  const { produtos } = useContext(ProdutosContext);
  const { addQuantidade } = useCart();
  return (
    <DivHomeContainer>
      <div className="teste">
        <div className="gambi">
          <Header />
        </div>
        {produtos.map((item, index) => (
          <div className="divPai">
            <div className="card" key={index}>
              <div>
                <img src={item.img} alt={item.name} />
                <hr />
              </div>
              <div>
                <p>
                  Título:<b> {item.name}</b>
                </p>
                <small>
                  <em> R${item.price.toFixed(2)}</em>
                </small>
              </div>
              <Button title="comprar" onClick={() => addQuantidade(item)}>
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        ))}
      </div>
    </DivHomeContainer>
  );
};
export default Home;
