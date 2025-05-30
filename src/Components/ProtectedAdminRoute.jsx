import { Navigate } from 'react-router-dom'

const protectedAdminRoute = ({ children }) => {
  const isAuth = localStorage.getItem('adminAuth') === 'true'
  return isAuth ? children : <Navigate to="/admin" />
}

export default protectedAdminRoute
