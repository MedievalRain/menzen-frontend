import { Dispatch, FormEvent, SetStateAction } from "react";
import Input from "../Input/Input";
import styles from "./AuthForm.module.scss";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface AuthFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => Promise<void>;
  submitText: string;
  linkText: string;
  linkTo: string;
}

function AuthForm({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  submitText,
  linkText,
  linkTo,
}: AuthFormProps) {
  return (
    <div className={`${styles.wrapper} shadow border-container`}>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email..."
          name="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль..."
          name="password"
        />
        <PrimaryButton type="submit">{submitText}</PrimaryButton>
      </form>
      <Link className={styles.link} to={linkTo}>
        {linkText}
      </Link>
    </div>
  );
}

export default AuthForm;
