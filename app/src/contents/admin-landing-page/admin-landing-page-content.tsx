import { Typography } from "@mui/material";
import {
  AdminDashboardContainer,
  AdminDashboardTextContainer,
  AdminPageWrapper,
  DashboardContainer,
  DashboardLeftContainer,
  DashboardRightContainer,
} from "./admin-landing-page-content.styled";
import UserList from "../user-management/user-list";
import { useTranslation } from "react-i18next";

export const AdminLandingPageContent = () => {
  const { t }= useTranslation('adminPage');
  return (
    <AdminPageWrapper>
      <AdminDashboardContainer>
        <AdminDashboardTextContainer>
          <Typography variant="body1">Super Admin</Typography>
          <Typography variant="h1">{t("heading")}</Typography>
        </AdminDashboardTextContainer>
      </AdminDashboardContainer>
      <DashboardContainer>
        <DashboardLeftContainer>
        </DashboardLeftContainer>
        <DashboardRightContainer>
          <UserList />
        </DashboardRightContainer>
      </DashboardContainer>
    </AdminPageWrapper>
  );
};
