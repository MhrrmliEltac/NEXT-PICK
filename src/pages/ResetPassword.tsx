import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { animateVariant } from "@/utils/animateVariants";
import { ShadButton } from "@/components/ui/button";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { resetPassword } from "@/auth/resetPass";
import { path } from "@/utils/paths";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useValidatePasswordMatch } from "@/hook/useValiedatePasswordMatch";

type ResetType = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useFormContext<ResetType>();

  const { confirmPassword, isValidPasswordMatch } =
    useValidatePasswordMatch<ResetType>(watch);

  const onSubmit: SubmitHandler<{
    password: string;
    confirmPassword: string;
  }> = async (formData: ResetType) => {
    if (isValidPasswordMatch && !loading) {
      setLoading(true);
      const { success } = await resetPassword(
        path.endpoints.auth.resetPassword,
        formData.password
      );
      setLoading(false);

      if (success) {
        navigate("/auth/login");
      }

      return;
    }

    toast.error("Password doesn't match");
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "16px",
            md: "24px",
          },
          mb: "32px",
          transition: "all 0.2s ease",
        }}
        color={NEUTRAL_COLOR.neutral800}
        fontWeight={600}
      >
        Forgot Password?
      </Typography>

      <motion.form
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <motion.div
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <IoEyeOffOutline
            className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]  ${
                    errors.password
                      ? "text-[#D00416] group-focus-within:text-[#D00416]"
                      : ""
                  }`}
          />
          <Input
            className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full ${
            errors.password
              ? "border-[#D00416] text-[#D00416] focus:border-[#D00416] placeholder:text-[#D00416] focus:placeholder:text-[#D00416]"
              : "custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]"
          }`}
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
          />
        </motion.div>
        {errors.password && (
          <span className="text-red-500 text-sm font-roboto font-medium">
            {String(errors.password.message)}
          </span>
        )}
        <motion.div
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <IoEyeOffOutline
            className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]  ${
                    errors.confirmPassword
                      ? "text-[#D00416] group-focus-within:text-[#D00416]"
                      : ""
                  }`}
          />
          <Input
            className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full ${
            errors.confirmPassword
              ? "border-[#D00416] text-[#D00416] focus:border-[#D00416] placeholder:text-[#D00416] focus:placeholder:text-[#D00416]"
              : "custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]"
          }`}
            placeholder="Confirm password"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
          />
        </motion.div>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm font-roboto font-medium">
            {String(errors.confirmPassword.message)}
          </span>
        )}
        {confirmPassword && !isValidPasswordMatch && (
          <span className="text-red-500 text-sm font-roboto font-medium">
            Passwords do not match
          </span>
        )}

        <ShadButton
          disabled={!isValidPasswordMatch}
          className={`${
            loading && "animate-pulse"
          } bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]`}
          type="submit"
        >
          Send
        </ShadButton>
      </motion.form>
    </>
  );
};

export default ResetPassword;
