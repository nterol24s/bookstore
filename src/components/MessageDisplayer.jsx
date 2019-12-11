import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  background: whitesmoke;
  color: black;
  padding: 5px 10px;
`;

const MessageDisplayer = ({ message }) => <Container>{message}</Container>;

export default MessageDisplayer;
