import { LabelAndInput } from "../../components/label-and-input/label-and-input";
import { ModalWrapper, ModalWrapperCentral } from "./login-page-content.styled"

export const LoginPageContent = () => {
  return (
    <ModalWrapperCentral>
      <ModalWrapper>
        <div style={{ display: "flex", justifyContent: "center", paddingTop:"3rem" }}>
          <label style={{ fontSize: "35px" }}>
            PRIJAVA
          </label>
        </div>
        <LabelAndInput
          label={"Korisničko ime"}
          type={"text"}
          placeholder={"Unesite korisničko ime"}
        />
        <LabelAndInput
          label={"Lozinka"}
          type={"password"}
          placeholder={"Unesite lozinku"}
        />
      </ModalWrapper>
    </ModalWrapperCentral>
  );
}
