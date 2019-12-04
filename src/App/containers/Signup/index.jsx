import React from 'react';
import SignupForm from './SignupForm';
import { AuthPage } from '../../components/AuthPage';

export const Signup = () => (
  <AuthPage>
    <div data-testid="signup">
      <SignupForm />
    </div>
  </AuthPage>
);
