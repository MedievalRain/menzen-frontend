import { authApi } from "../../api/authApi/authApi";
import AuthForm from "../../ui/AuthForm/AuthForm";
import { useAuth } from "./hooks/useAuth";
function LoginForm() {
  const { email, setEmail, password, setPassword, handleSubmit } = useAuth(
    authApi.useLoginMutation,
    "/app"
  );
  return (
    <AuthForm
      linkText="Ещё нет аккаунта?"
      email={email}
      handleSubmit={handleSubmit}
      linkTo="/register"
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submitText="Вход"
    />
  );
}

export default LoginForm;
