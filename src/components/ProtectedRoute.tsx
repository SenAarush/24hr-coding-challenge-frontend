// src/routes/ProtectedRoute.tsx
import { Navigate,Outlet } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

// const isTokenValid = (token: string | null): boolean => {
//   if (!token) return false;

//   try {
//     const decoded: { exp: number } = jwtDecode(token);
//     const currentTime = Date.now() / 1000;
//     return decoded.exp > currentTime;
//   } catch (error) {
//     return false;
//   }
// };

const ProtectedRoute: React.FC = () => {
    const token = localStorage.getItem('token')

    return token ? <Outlet /> : <Navigate to="/auth" replace />;

    //   return isTokenValid(token) ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
