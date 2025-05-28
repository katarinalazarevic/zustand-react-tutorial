import { useEffect } from "react";
import {
  HeaderContainerWrapper,
  HeaderText,
  HeaderWrapper,
} from "./primary-header.styled";
import { useAuthStore } from "src/store/user/useAuthStore";

export const PrimaryHeader = () => {
  const { isLoggedIn, firstName } = useAuthStore();

  return (
    <HeaderWrapper>
      <HeaderContainerWrapper>
        <HeaderText>Dobrodošli {isLoggedIn && firstName}</HeaderText>
      </HeaderContainerWrapper>
    </HeaderWrapper>
  );
};