import { Routes, Route } from 'react-router-dom';

// import Login from './pages/Login';
// import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/signin" element={<AuthPage mode={'sign up'}/>} /> */}
      {/* <Route path="/signup" element={<AuthPage mode={'sign in'}/>} /> */}
      <Route path="/auth" element={<AuthPage mode={'sign in'}/>} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
