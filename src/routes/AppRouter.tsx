import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from 'src/pages/login-page/login-page';
import { ROUTES } from 'src/constants/route-constants';
import { UserLandingPage } from 'src/pages/user-landing-page/user-landing-page';

function AppRouter() {

  return (
    <Router>
      <Routes>
          <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
          <Route
            path={ROUTES.USER_LANDING_PAGE}
            element={<UserLandingPage />}
          />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;