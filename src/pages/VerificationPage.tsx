import { useVerification } from "../features/auth/hooks/useVerification";
import Loader from "../ui/Loader/Loader";

function VerificationPage() {
  const { isError, isLoading, userId } = useVerification();
  if (!userId)
    return (
      <div>
        Аккаунт зарегистрирован. Подтвердите ваш Email перейдя по ссылке из
        письма.
      </div>
    );
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div>Возникла ошибка при подтверждении Email. Попробуйте позднее.</div>
    );
}

export default VerificationPage;
