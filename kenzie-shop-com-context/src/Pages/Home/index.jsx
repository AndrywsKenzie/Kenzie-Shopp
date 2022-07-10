import { useContext } from "react";
import { Button } from "../../Components/Button";
import { useCart } from "../../Provider/cartProvider";
import { Header } from " src/Components/Header/index.jsx";
import { ProdutosContext } from "../../Provider/catalogoProvider";

const Home = () => {
  const { produtos } = useContext(ProdutosContext);
  const { addQuantidade } = useCart();
  return (
    <div>
      <Header />
      {produtos.map((item, index) => (
        <div>
          <div className="itens" key={index}>
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
              <p> R${item.price.toFixed(2)}</p>
            </div>
            <Button onClick={() => addQuantidade(item)}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
