import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, LoginBox, Input, Button } from "./styles";
import { FaUser, FaLock } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { client } from '../../services/api_client';
import { endpoints } from '../../services/endpoints';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, storeTokenForAuth } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await client.post(endpoints.USER_LOGIN_ENDPOINT, data);
      const { token } = response.data;

      storeTokenForAuth(token);
      const from = location.state?.from?.pathname || "/home";
      navigate(from);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container>
      <LoginBox>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input 
            {...register('email', { required: true })}
            placeholder="Email"
            icon={<FaUser />}
          />
          <Input 
            {...register('password', { required: true })}
            type="password"
            placeholder="Senha"
            icon={<FaLock />}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;