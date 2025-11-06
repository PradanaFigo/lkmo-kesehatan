import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = ['pasien', 'dokter', 'admin'] }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!token) {
    return <Navigate to="/masuk" replace />;
  }
  
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />; // atau halaman error
  }
  
  return children;
};

export default ProtectedRoute;