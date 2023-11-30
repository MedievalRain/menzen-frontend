import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useError } from "../../../hooks/useError";
import toast from "react-hot-toast";
import { authApi } from "../../../api/authApi/authApi";

export const useVerification = () => {
  const { userId } = useParams();

  const navigate = useNavigate();
  const [verify, { isLoading, isError, error, isSuccess }] =
    authApi.useVerifyMutation();
  useError(isError, error);
  useEffect(() => {
    if (userId) {
      verify(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Email подтверждён");
      navigate("/login");
    }
  }, [isSuccess]);

  return { isLoading, isError, userId };
};
