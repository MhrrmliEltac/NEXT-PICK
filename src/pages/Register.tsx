import { StepProps, Steps } from "antd";
import { useState } from "react";
import { Card } from "@mui/material";
import { motion } from "framer-motion";
import { LuUserPen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import EmailForm from "@/components/auth/register/EmailForm";
import { animateVariant } from "@/utils/animateVariants";
import OTPForm from "@/components/auth/register/OTPForm";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "@/types/types";
import InfoForm from "@/components/auth/register/InfoForm";

const getSteps = (activeStep: number): StepProps[] => [
  {
    title: "Sign up",
    icon: <LuUserPen size={18} />,
    className:
      activeStep < 0 ? "step-disabled" : activeStep > 0 ? "step-active" : "",
  },
  {
    title: "Verify email",
    icon: <MdOutlineEmail size={18} />,
    className:
      activeStep < 1 ? "step-disabled" : activeStep > 1 ? "step-active" : "",
  },
  {
    title: "Add info",
    icon: <BsInfoSquare size={18} />,
    className:
      activeStep < 2 ? "step-disabled" : activeStep > 2 ? "step-active" : "",
  },
];

const Register = () => {
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const [activeStep, setActiveStep] = useState<number>(0);

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
              <EmailForm setActiveStep={setActiveStep} />
            ) : activeStep === 1 ? (
              <OTPForm setActiveStep={setActiveStep} />
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
