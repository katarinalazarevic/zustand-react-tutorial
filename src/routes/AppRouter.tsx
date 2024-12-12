import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from 'src/pages/login-page/login-page';
import { AdminLandingPage } from 'src/pages/admin-landing-page/admin-landing-page';
import { ROUTES } from 'src/constants/route-constants';
import ProtectedRoute from './ProtectedRoute';
import { Roles } from 'src/enums/Roles';
import { PublicRoute } from './PublicRoute';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Roles.SUPERADMIN]} />}>
          <Route
            path={ROUTES.ADMIN_LANDING_PAGE}
            element={<AdminLandingPage />}
          />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;