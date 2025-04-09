import React from 'react';
import AuthForm from '../pages/AuthPage';



const RegisterForm: React.FC<RegisterFormProps> = ({ onClose, onSignup }) => {
  return (
    <AuthForm
      title="Create an Account"
      submitText="Sign Up"
      showNameField
      onSubmit={onSignup}
      onClose={onClose}
    />
  );
};

export default RegisterForm;
