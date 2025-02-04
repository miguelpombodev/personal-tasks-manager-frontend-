import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { FaUser, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { client } from "../../services/api/api_client";
import { endpoints } from "../../services/api/endpoints";
import InputComponent from "../../components/Input";
import ButtonComponent from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";

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
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error(
          "Usuário não encontrado. Verifique suas credenciais e tente novamente.",
        );
      } else {
        toast.error("Ocorreu um erro inesperado. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <S.Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <S.LoginImageContainer>
        <S.LoginImage
          src="/login_image.jpg"
          alt="login-image"
          title="login-image"
        />
      </S.LoginImageContainer>
      <S.LoginContainer>
        <S.LoginBox>
          <S.LoginContainerHeader>
            <h2>Start Organizing Yourself!</h2>
            <span>
              Does not have an account?
              <S.CreateAccountLink to="/create">
                Create it here!
              </S.CreateAccountLink>
            </span>
          </S.LoginContainerHeader>
          <form onSubmit={handleSubmit(handleLogin)}>
            <InputComponent
              {...register("email", { required: true })}
              placeholder="Email"
              icon={<FaUser />}
            />
            <InputComponent
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              icon={<FaLock />}
            />
            <ButtonComponent
              size="full"
              title="Log in"
              color="primary"
              type="submit"
            />
          </form>
        </S.LoginBox>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
