import { motion } from "framer-motion"
import { Card } from "@mui/material"
import { animateVariant } from "@/utils/animateVariants"
import { useState } from "react"
import ForgotPassword from "@/pages/ForgotPassword"
import { FormProvider, useForm } from "react-hook-form"
import { IForgotPasswordInput } from "@/types/types"
import OTPVerification from "@/components/general/OTPVerification"
import { verifyOtp } from "@/auth/otpCode"
import ResetPassword from "@/pages/ResetPassword"


const ForgotPassLayout = () => {
    const methods = useForm<IForgotPasswordInput>({
        mode: "onChange"
    })

    const { email } = methods.getValues() as IForgotPasswordInput

    const onVerify = async (otpCode: string) => {
        if (otpCode) {
            await verifyOtp("/auth/verify-otp-forgot-password", email, otpCode)
            setActiveStep((prev) => prev + 1)
        }
    }


    const [activeStep, setActiveStep] = useState<number>(0)

    return (
        <FormProvider {...methods}>
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


                    {
                        activeStep === 0 ? <ForgotPassword setActiveStep={setActiveStep} /> : activeStep === 1 ? <OTPVerification email={email} onVerify={onVerify} onEmailChange={() => { }} onResendCode={() => { }} maxLength={6} expiryMinutes={1} /> : <ResetPassword />
                    }


                </Card>
            </section>
        </FormProvider>
    )
}

export default ForgotPassLayout