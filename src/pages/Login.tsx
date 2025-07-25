import { ShadButton } from "@/components/ui/button";
import { Card, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import EmailInput from "@/components/general/EmailInput";
import PasswordInput from "@/components/general/PasswordInput";
import { motion } from "framer-motion";
import { NEUTRAL_COLOR } from "@/constant/colors";

interface IFormInput {
  email: string;
  password: string;
}

const animateVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section className="flex items-center justify-center h-screen max-sm:px-5">
      <Card className="w-full flex flex-col justify-between sm:max-w-[392px] min-h-fit border border-[#CBCBC] rounded-[8px] !shadow-none px-6 pt-12 pb-6">
        <motion.div
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center mb-14"
        >
          <img src="/logo.svg" alt="logo_image" />
        </motion.div>

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
          Log into your account
        </Typography>

        {/* Login Form */}
        <motion.form
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* EMAIL */}
          <EmailInput errors={errors} register={register} />

          {/* PASSWORD */}
          <PasswordInput errors={errors} register={register} />

          {/* Forogt Password */}
          <Link to="/" className="font-roboto text-[12px] text-[#4A73EA]">
            Forgot Password?
          </Link>
          <ShadButton className="bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]">
            Login
          </ShadButton>
        </motion.form>
        <div className="relative flex items-center justify-center my-4">
          <span className="absolute inset-x-0 top-1/2 border-t border-gray-300"></span>
          <span className="relative bg-white px-2 text-[#939393] text-base font-roboto">
            OR
          </span>
        </div>

        {/* Login with Google account */}
        <motion.div
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          <ShadButton className="w-full h-full flex items-center max-md:text-xs bg-white hover:bg-white border border-[#1744C8] justify-center rounded-[8px] text-[#1744C8] font-roboto !py-[15px] gap-2">
            <img src="/googleicon.svg" />
            Login with Google Account
          </ShadButton>
        </motion.div>

        {/* Login button */}
        <motion.div
          variants={animateVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/auth/register"
            className="text-[#4A73EA] flex items-center justify-center mt-4"
          >
            <Typography variant="h6" fontWeight={600} fontSize={16}>
              Create an Account
            </Typography>
          </Link>
        </motion.div>
      </Card>
    </section>
  );
};

export default Login;
