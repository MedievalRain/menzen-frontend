import { authApi } from "../../api/authApi/authApi";
import AuthForm from "../../ui/AuthForm/AuthForm";
import { useAuth } from "./hooks/useAuth";

function RegisterForm() {
  const { email, setEmail, password, setPassword, handleSubmit } = useAuth(
    authApi.useRegisterMutation,
    "/verification"
  );

  return (
    <AuthForm
      linkText="Уже есть аккаунт?"
      email={email}
      handleSubmit={handleSubmit}
      linkTo="/login"
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submitText="Регистрация"
    />
  );
}

export default RegisterForm;
