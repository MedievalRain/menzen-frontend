import { api } from "../../api/api";
import AuthForm from "../../ui/AuthForm/AuthForm";
import { useAuth } from "./useAuth";

function RegisterForm() {
  const { email, setEmail, password, setPassword, handleSubmit } = useAuth(
    api.useRegisterMutation,
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
      submitText="Register"
    />
  );
}

export default RegisterForm;
