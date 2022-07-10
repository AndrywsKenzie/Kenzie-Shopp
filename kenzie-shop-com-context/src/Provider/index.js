import { ProdutosProvider } from "./catalogoProvider";
import { CartProvider } from "./cartProvider";
export const Provider = ({ children }) => {
  return (
    <CartProvider>
      <ProdutosProvider>{children}</ProdutosProvider>
    </CartProvider>
  );
};
export default Provider;
