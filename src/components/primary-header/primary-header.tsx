import {
  HeaderContainerWrapper,
  HeaderText,
  HeaderWrapper,
  LogoutButton,
} from "./primary-header.styled";
import { useAuthStore } from "src/store/user/useAuthStore";
import { FiLogOut } from "react-icons/fi"; 

export const PrimaryHeader = () => {
  const { isLoggedIn, firstName, logout } = useAuthStore();

  return (
    <HeaderWrapper>
      <HeaderContainerWrapper>
        <HeaderText>Dobrodošli {isLoggedIn && firstName}</HeaderText>
        {isLoggedIn && (
          <LogoutButton onClick={logout} title="Izloguj se">
            <FiLogOut size={20} />
          </LogoutButton>
        )}
      </HeaderContainerWrapper>
    </HeaderWrapper>
  );
};