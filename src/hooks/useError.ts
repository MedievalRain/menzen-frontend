import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type ErrorTypes =
  | "UNAUTHORIZED"
  | "INTERNAL_ERROR"
  | "JWT"
  | "WRONG_PASSWORD"
  | "VALIDATION_ERROR"
  | "USER_EXISTS"
  | "USER_NOT_EXISTS"
  | "USER_NOT_ACTIVE"
  | "USER_VERIFIED"
  | "USER_NOT_VERIFIED"
  | "INVALID_JWT"
  | "COLLECTION_NOT_EXISTS"
  | "COLUMN_EXISTS"
  | "COLUMN_NOT_EXIST"
  | "ORDERING_ERROR"
  | "COIN_NOT_EXISTS";

interface ErrorResponse {
  error: ErrorTypes;
}

export const useError = (
  isError: boolean,
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isError && error) {
      if ("data" in error) {
        const errorType = (error.data as ErrorResponse).error;
        switch (errorType) {
          case "USER_EXISTS":
            toast.error("Пользователь уже существует");
            break;
          case "WRONG_PASSWORD":
            toast.error("Неправильный Email или пароль");
            break;
          case "VALIDATION_ERROR":
            toast.error("Неверный формат данных");
            break;
          case "INTERNAL_ERROR":
            toast.error("Внутреняя ошибка сервера");
            break;
          case "USER_NOT_VERIFIED":
          case "USER_NOT_ACTIVE":
            toast.error("Email не подтвержден");
            break;
          case "USER_VERIFIED":
            toast.error("Email уже подтвержден");
            navigate("/login");
            break;
          case "USER_NOT_EXISTS":
            toast.error("Пользователь не зарегистрирован");
            navigate("/login");
            break;
          case "COLLECTION_NOT_EXISTS":
            toast.error("Коллекция не существует");
            break;
          case "COLUMN_EXISTS":
            toast.error("Поле с таким именем уже существует");
            break;
          case "COLUMN_NOT_EXIST":
            toast.error("Поле не уже существует");
            break;
          case "ORDERING_ERROR":
            toast.error("Неверный порядок полей");
            break;
          case "COIN_NOT_EXISTS":
            navigate("..", { relative: "path" });
            break;

          case "UNAUTHORIZED":
          case "INVALID_JWT":
          case "JWT":
            navigate("/login");
            break;
          default:
            toast.error("Неизвестная ошибка");
        }
      } else {
        toast.error("Ошибка соединения");
      }
    }
  }, [isError]);
};
