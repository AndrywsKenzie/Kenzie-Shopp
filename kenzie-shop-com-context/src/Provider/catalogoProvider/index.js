import { createContext, useState } from "react";
export const ProdutosContext = createContext([]);
export const CatalogoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Naruto",
      price: 29.9,
      img: "https://cf.shopee.com.br/file/0436deddbcd434a95c55693573ca5733",
    },
    {
      id: 2,
      name: "Yuyu Hakusho",
      price: 23.9,
      img: "https://cf.shopee.com.br/file/4d94d9b1f3c3fb802554ef7b03ea28ab",
    },
    {
      id: 3,
      name: "One Punch Man",
      price: 25.0,
      img: "https://cf.shopee.com.br/file/e61fa7c4896d7fe7dd0071daf459af20",
    },
    {
      id: 4,
      name: "Boku no Hero Academy",
      price: 28.0,
      img: "https://images-na.ssl-images-amazon.com/images/I/71bELfIWTDL.jpg",
    },
    {
      id: 5,
      name: "Bleach",
      price: 19.0,
      img: "https://rika.vteximg.com.br/arquivos/ids/161457-1000-1000/-manga-bleach-01.jpg?v=635314345945700000",
    },
    {
      id: 6,
      name: "Kimetsu no Yaiba",
      price: 22.0,
      img: "https://img.assinaja.com/assets/tZ/004/img/201963_520x520.jpg",
    },
    {
      id: 7,
      name: "Fairy Tail",
      price: 21.9,
      img: "https://images-na.ssl-images-amazon.com/images/I/91tWNPt9AQL.jpg",
    },
  ]);
  return (
    <ProdutosContext.Provider value={{ produtos }}>
      {children}
    </ProdutosContext.Provider>
  );
};
