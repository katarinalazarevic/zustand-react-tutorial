import styled from "styled-components";

export const LabelAndInputDiv = styled.div`
padding: 2.5rem 0rem 0rem 3rem;
`   
export const InputField = styled.input<{ $isEqual?: boolean }>`
  width: 80%;
  height: 1.5rem;
  border-radius: 1.25rem;
  border: 0.125rem solid var(--input-border-color);
  font-size: 1rem;
  padding: 12px 24px 12px 24px;
  margin-top: 6px;
  color: ${({ $isEqual }) =>
    $isEqual ? "var(--input-border-color)" : "var(--input-form-label-text)"};
`;
