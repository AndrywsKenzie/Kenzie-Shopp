import { useHistory } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { DivHeaderContainer } from "./headerStyled";

export const Header = () => {
  const history = useHistory();
  return (
    <DivHeaderContainer>
      <h1 title="Sua Loja de Mangás">Manga shop</h1>
      <button title="Seu Carrinho">
        <HiShoppingCart onClick={() => history.push("/carrinho")} />
      </button>
    </DivHeaderContainer>
  );
};
