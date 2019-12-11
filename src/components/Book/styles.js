import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid SLATEGRAY;
  padding: 8px 16px;
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
  ${"" /* text-transform: uppercase; */}
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const QButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin: 2px;
  font-weight: 700;
  color: ${({ minus }) => (minus ? "GAINSBORO" : "DARKSLATEGRAY")};
  background: ${({ minus }) => (minus ? "SLATEGRAY" : "GAINSBORO")};
`;
