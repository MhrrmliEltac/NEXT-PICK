import { Path, UseFormWatch } from "react-hook-form";

export const useValidatePasswordMatch = <
  T extends { password?: string; confirmPassword?: string }
>(
  watch: UseFormWatch<T>
) => {
  const password = watch("password" as Path<T>);
  const confirmPassword = watch("confirmPassword" as Path<T>);

  const isValidPasswordMatch =
    !!password && !!confirmPassword && password === confirmPassword;

  return {
    password,
    confirmPassword,
    isValidPasswordMatch,
  };
};
