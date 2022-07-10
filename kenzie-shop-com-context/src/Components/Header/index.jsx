import { useHistory } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
export const Header = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Kenzie shop</h1>
      <button>
        <HiShoppingCart onClick={() => history.push("/carrinho")} />
      </button>
    </div>
  );
};
export default Header;
