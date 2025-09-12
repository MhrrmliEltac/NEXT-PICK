import { StepProps, Steps } from "antd";
import { useState } from "react";
import { Card } from "@mui/material";
import { motion } from "framer-motion";
import { LuUserPen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import EmailForm from "@/components/auth/register/EmailForm";
import { animateVariant } from "@/utils/animateVariants";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "@/types/types";
import InfoForm from "@/components/auth/register/InfoForm";
import { verifyOtp } from "@/auth/otpCode";
import OTPVerification from "@/components/general/OTPVerification";
import { path } from "@/utils/paths";

const getSteps = (activeStep: number): StepProps[] => {
  const stepStatus = (index: number) =>
    activeStep === index
      ? "step-current"
      : activeStep > index
      ? "step-completed"
      : "step-disabled";

  return [
    {
      title: "Sign up",
      icon: <LuUserPen size={18} />,
      className: stepStatus(0),
    },
    {
      title: "Verify email",
      icon: <MdOutlineEmail size={18} />,
      className: stepStatus(1),
    },
    {
      title: "Add info",
      icon: <BsInfoSquare size={18} />,
      className: stepStatus(2),
    },
  ];
};

const Register = () => {
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const [activeStep, setActiveStep] = useState<number>(0);

  const email = methods.getValues("email");

  const onVerify = async (otpCode: string) => {
    if (otpCode) {
      await verifyOtp("/auth/verify-otp", email, otpCode);
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className="h-[calc(100vh-185px)]">
        <div className="lg:w-[468px] sm:w-[320px] w-[90%] mx-auto mt-20">
          <Steps items={getSteps(activeStep)} current={activeStep} />
        </div>
        <section className="flex items-center justify-center max-sm:px-5 h-full">
          <Card className="w-full flex flex-col justify-between sm:max-w-[392px] min-h-fit border border-[#CBCBC] rounded-[8px] !shadow-none px-6 p-12 pb-6">
            <motion.div
              variants={animateVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center mb-14"
            >
              <img src="/logo.svg" alt="logo_image" />
            </motion.div>

            {activeStep === 0 ? (
              <EmailForm
                setActiveStep={setActiveStep}
                endpoint={path.endpoints.auth.sendOtp}
              />
            ) : activeStep === 1 ? (
              <OTPVerification
                email={email}
                onVerify={onVerify}
                onEmailChange={() => {
                  // TODO: implement email change logic
                }}
                onResendCode={() => {
                  // TODO: implement email change logic
                }}
                maxLength={6}
                expiryMinutes={1}
              />
            ) : (
              <InfoForm />
            )}
          </Card>
        </section>
      </section>
    </FormProvider>
  );
};

export default Register;
