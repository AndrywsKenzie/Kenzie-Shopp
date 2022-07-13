import styled from "styled-components";

export const DivHeaderContainer = styled.div`
  background-color: gray;
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://guidable.co/wp-content/uploads/2022/02/yen-2.jpg");
  background-size: cover;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  position: relative;
  justify-self: start;
  margin: right;
  hr {
    color: gray;
  }
  h1 {
    color: black;
    :hover {
      color: rgb(91, 94, 166);
    }
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
`;
