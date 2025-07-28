import { ShadButton } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmailInput from "@/components/general/EmailInput";
import { motion } from "framer-motion";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { path } from "@/utils/paths";
import { animateVariant } from "@/utils/animateVariants";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormData } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

const EmailForm = ({
  setActiveStep,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useFormContext<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (isValid) {
      setActiveStep((prev) => prev + 1);
      console.log(data);
    }
  };

  return (
    <>
      <Typography
        component={motion.div}
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        variant="h4"
        sx={{
          fontSize: {
            xs: "16px",
            md: "24px",
          },
          mb: "32px",
        }}
        color={NEUTRAL_COLOR.neutral800}
        fontWeight={600}
      >
        Create an account
      </Typography>
      <motion.form
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mb-8"
      >
        <Typography
          component="span"
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral650}
        >
          Enter your email address below, we will send you a 6_digit code to
          verify and secure your account.
        </Typography>

        {/* EMAIL */}
        <EmailInput errors={errors} register={register} />

        <ShadButton
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className="bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]"
        >
          Continue
        </ShadButton>
      </motion.form>
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-4"
      >
        <Typography
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral800}
        >
          Have you already created an account?
        </Typography>

        <Link to={path.urlPaths.auth.login}>
          <ShadButton className="w-full h-full flex items-center max-md:text-xs bg-white hover:bg-white border border-[#1744C8] justify-center rounded-[8px] text-[#1744C8] font-roboto !py-[15px] gap-2">
            Login
          </ShadButton>
        </Link>
      </motion.div>
    </>
  );
};

export default EmailForm;
