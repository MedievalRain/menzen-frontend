import { useVerification } from "../../features/auth/hooks/useVerification";
import Loader from "../../ui/Loader/Loader";
import Logo from "../../ui/Logo/Logo";
import styles from "./VerificationPage.module.scss";
function VerificationPage() {
  const { isError, isLoading, userId } = useVerification();

  if (!userId)
    return (
      <div className={styles.wrapper}>
        <Logo />
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className={styles.wrapper}>
            Возникла ошибка при подтверждении Email. Попробуйте позднее.
          </div>
        ) : (
          <div>
            Аккаунт зарегистрирован. Подтвердите ваш Email перейдя по ссылке из
            письма.
          </div>
        )}
      </div>
    );
}

export default VerificationPage;
