import styled from "styled-components";

export const DivCartPageContainer = styled.div`
  background-color: aqua;
  display: flex;
  margin: auto;
  width: 40vw;
  .vazio {
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    .semItems {
      font-size: Bold;
    }
    .preco {
      display: none;
      background-color: gold;
    }
  }
  em {
    color: coral;
    font-weight: 600;
  }
  button {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    :hover {
      background-color: green;
      cursor: pointer;
    }
  }
  img {
    height: 180px;
    width: 200px;
    margin-top: 5px;
  }
  .teste {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 320px;
    border: solid 2px lightgray;
    margin: auto;
    margin-bottom: 5px;
  }
  .botoesAdd {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    .green {
      height: 25px;
      width: 25px;
    }
    .red {
      height: 25px;
      width: 25px;
      :hover {
        background-color: red;
      }
    }
  }
  b {
    color: red;
  }
`;
