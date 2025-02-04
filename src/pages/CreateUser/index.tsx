import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { FaLock, FaIdCard, FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { client } from "../../services/api/api_client";
import { endpoints } from "../../services/api/endpoints";
import InputComponent from "../../components/Input";
import ButtonComponent from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import User from "../../services/api/models/User.model";

interface CreateUserFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  validate_password: string;
  isAgreed: boolean;
}

const CreateUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = useForm<CreateUserFormData>({ mode: "onChange" });
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleLogin = async (data: CreateUserFormData) => {
    try {
      console.log(data);
      const formattedUser = new User(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
      );
      await client.post(endpoints.CREATE_NEW_USER, formattedUser);

      const from = location.state?.from?.pathname || "/login";
      navigate(from);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error(
          "Usuário não pôde ser criado. Verifique os dados inseridos e tente novamente.",
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
      <S.CreateUserImageContainer>
        <S.CreateUserImage
          src="/create_account_image.jpg"
          alt="create-account-image"
          title="create-account-image"
        />
      </S.CreateUserImageContainer>
      <S.CreateUserContainer>
        <S.CreateUserContainerHeader>
          <h2>Create an Account</h2>
          <span>
            Already have an account?
            <S.CreateAccountLink to="/login">Log in!</S.CreateAccountLink>
          </span>
        </S.CreateUserContainerHeader>
        <S.CreateUserBox>
          <form onSubmit={handleSubmit(handleLogin)}>
            <S.CreateUserFullNameBox>
              <InputComponent
                {...register("firstName", { required: true, min: 3 })}
                placeholder="First Name"
                icon={<FaIdCard />}
              />
              <InputComponent
                {...register("lastName", { required: true, min: 3 })}
                placeholder="Last Name"
                icon={<FaIdCard />}
              />
            </S.CreateUserFullNameBox>
            <InputComponent
              {...register("email", { required: true })}
              placeholder="Email"
              icon={<MdEmail />}
            />
            <InputComponent
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              icon={<FaLock />}
            />
            <InputComponent
              {...register("validate_password", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              type="password"
              placeholder="Confirm your password"
              icon={<FaLock />}
            />
            <S.CreateUserAcceptTermsAndConditions>
              <S.CreateUserAcceptTermsAndConditionsCheckbox
                type="checkbox"
                {...register("isAgreed", { required: true })}
              />{" "}
              I agree to the <Link to="#">Terms and Conditions</Link>
            </S.CreateUserAcceptTermsAndConditions>
            <ButtonComponent
              size="full"
              title="Sign up"
              color="primary"
              type="submit"
              disabled={!isDirty || !isValid}
            />
          </form>
          <S.CreateUserDividerContainer>
            <S.CreateUserLine />
            Or register with
            <S.CreateUserLine />
          </S.CreateUserDividerContainer>

          <S.SocialButtonsContainer>
            <S.SocialButton color="#DB4437">
              <FaGoogle /> Sign up with Google
            </S.SocialButton>
            <S.SocialButton color="#000">
              <FaApple /> Sign up with Apple
            </S.SocialButton>
          </S.SocialButtonsContainer>
        </S.CreateUserBox>
      </S.CreateUserContainer>
    </S.Container>
  );
};

export default CreateUser;
