import React from 'react';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import ToastContainer from './components/ToastContainer';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
