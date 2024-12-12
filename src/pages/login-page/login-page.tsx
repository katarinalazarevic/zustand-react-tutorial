import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { LoginPageContent } from 'src/contents/login-page/login-page';
import MainLayout from 'src/layouts/main-layout';

export const LoginPage = () => {

  return (
    <MainLayout backgroundColor='var(--login-pagecontainer-background)'>
      <LoginPageContent />
    </MainLayout>
  );
}