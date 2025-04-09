import React from 'react';
import AuthForm from '../pages/AuthPage';

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  return (
    <AuthForm
      title="Login"
      submitText="Login"
      onSubmit={onLogin}
      onClose={onClose}
    />
  );
};

export default LoginForm;
