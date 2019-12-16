import styled from "styled-components";

import { BaseButton, Flex } from "../Common/styles";

export const Container = styled.div`
  border-bottom: 1px solid SLATEGRAY;
  padding: 16px 8px;
  width: 96%;
  margin: auto;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-family: "zilla slab", serif;
`;

export const Price = styled.div`
  flex: 1;
  display: flex;
  ${"" /* border: 1px solid goldenrod; */}
  font-weight: 700;
  min-height: 56px;
`;

export const Author = styled.div`
  font-weight: 600;
  font-size: 14px;
  ${"" /* text-transform: uppercase; */}
  color: SILVER;
  font-family: "zilla slab", serif;
`;

export const Description = styled.p`
  font-weight: 400;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${props => (props.open ? "128px" : "64px")};
  width: 80%;
  transition: all 0.2s ease-in;
`;

export const Tag = styled.p`
  font-weight: 700;
  background: darkgoldenrod;
  padding: 4px;
  font-size: 12px;
  border-radius: 4px;
  font-family: "zilla slab", serif;
  text-transform: uppercase;
`;

export const Quantity = styled.p`
  width: 24px;
  height: 24px;
  background: darkgoldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Title = styled.h2`
  font-family: "germania one", display;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  ${"" /* color: white; */}
`;

export const SmallButton = styled(BaseButton)`
  font-family: "zilla slab", serif;
  color: darkgoldenrod;
  background: transparent;
  font-size: 14px;
`;

export const QButton = styled(BaseButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  margin: 2px;
  color: ${({ minus }) => (minus ? "GAINSBORO" : "DARKSLATEGRAY")};
  font-size: 14px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: ${({ minus }) => (minus ? "SLATEGRAY" : "GAINSBORO")};
`;

export const ConfirmationContainer = styled.div`
  padding: 8px;
  border-radius: 5px;
  background: DARKSLATEGRAY;
  color: gainsboro;
`;

export const OrderContainer = styled(Flex)`
  padding: 8px;
  align-items: center;
`;
