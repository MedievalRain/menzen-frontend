import {
  MutationDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseMutation } from "@reduxjs/toolkit/dist/query/react/buildHooks";

import { AuthData } from "../../../api/apiTypes";
import { useError } from "../../../hooks/useError";

type AuthMutation = UseMutation<
  MutationDefinition<
    AuthData,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      object,
      FetchBaseQueryMeta
    >,
    never,
    void,
    "api"
  >
>;
export const useAuth = (mutation: AuthMutation, redirectTo: string) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [action, { isSuccess, isError, error }] = mutation();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    action({ email, password });
  };
  useEffect(() => {
    if (isSuccess) {
      navigate(redirectTo);
    }
  }, [isSuccess]);
  useError(isError, error);

  return { handleSubmit, email, setEmail, password, setPassword };
};
