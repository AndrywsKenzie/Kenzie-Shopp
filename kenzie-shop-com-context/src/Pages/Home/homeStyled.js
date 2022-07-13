import styled from "styled-components";

export const DivHomeContainer = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 98, 9vw;
  margin: auto;
  p {
    color: gold;
  }
  small {
    color: green;
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: green;
    }
    :active {
      background-color: gray;
    }
  }

  img {
    height: 180px;
    width: 200px;
    margin-top: 5px;
  }
  .teste {
    margin: auto;
    justify-content: space-between;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 330px;
    border: solid 1px gray;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
