import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const Col = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const RespRow = styled(Row)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BaseButton = styled.button`
  padding: 0;
  border: none;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;
