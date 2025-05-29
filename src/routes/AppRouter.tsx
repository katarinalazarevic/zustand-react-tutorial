import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from 'src/pages/login-page/login-page';
import { ROUTES } from 'src/constants/route-constants';
import TaskPage from 'src/pages/user-landing-page/user-landing-page';
import ProtectedRoute from './protected-route';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.USER_LANDING_PAGE} element={<TaskPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;