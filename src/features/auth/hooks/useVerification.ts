import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { useError } from "../../../hooks/useError";
import toast from "react-hot-toast";

export const useVerification = () => {
  const { userId } = useParams();

  const navigate = useNavigate();
  const [verify, { isLoading, isError, error, isSuccess }] =
    api.useVerifyMutation();
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
