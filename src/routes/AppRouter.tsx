import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimaryHeader } from '../contents/primary-header/primary-header';
import { LoginPage } from '../pages/login-page/login-page';


export const AppRouter = () => {
  return (
    <Router>
      <PrimaryHeader />
      <Routes>
        <Route path={"/"} element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}
