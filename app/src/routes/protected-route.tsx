import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'src/store/user/useAuthStore';
import { ROUTES } from 'src/constants/route-constants';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN_ROUTE} replace />;
};

export default ProtectedRoute;