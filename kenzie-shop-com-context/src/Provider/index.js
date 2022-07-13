import { CatalogoProvider } from "./catalogoProvider";
import { CartProvider } from "./cartProvider";
export const Provider = ({ children }) => {
  return (
    <CartProvider>
      <CatalogoProvider>{children}</CatalogoProvider>
    </CartProvider>
  );
};
export default Provider;
