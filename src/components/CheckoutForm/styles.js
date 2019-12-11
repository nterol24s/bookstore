import styled from "styled-components";

export const Form = styled.form`
  margin-top: 16px;
  padding: 16px 32px 64px;
  margin: auto;
  font-size: 14px;
  transform: translateY(8px);
  & label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: SILVER;
    font-family: "zilla slab", serif;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 8px;
  border-radius: 4px;
  background: ${({ disabled }) => (disabled ? "silver" : "darkgoldenrod")};
  color: ${({ disabled }) => (disabled ? "DIMGRAY" : "GAINSBORO")};
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
`;
