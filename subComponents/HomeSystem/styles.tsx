import styled from "styled-components";

export const Tab = styled("div")`
  background-color: ${({ selected }: any) => {
    return selected ? "#0066cc" : "";
  }};
  border-radius: 15px;
  * {
    color: ${({ selected }: any) => {
      return selected ? "#fff" : "0066cc";
    }};
  }
`;
