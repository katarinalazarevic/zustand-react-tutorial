import { InputField, LabelAndInputDiv } from "./label-and-input.styled";

export interface LabelAndInputProps {
    label: string,
    type: string,
    placeholder: string
}

export const LabelAndInput = (props: LabelAndInputProps) => {
  return (
    <LabelAndInputDiv>
      <div>
        <label>{props.label}</label>
      </div>
      <div style={{paddingTop:"10px"}}>
        <InputField type={props.type} placeholder={props.placeholder} />
      </div>
    </LabelAndInputDiv>
  );
};
