import { path } from "@/utils/paths";
import { Typography } from "@mui/material"
import { useForgotPassword } from "@/auth/useAuth";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { animateVariant } from "@/utils/animateVariants";
import EmailInput from "@/components/general/EmailInput";
import { ShadButton } from "@/components/ui/button";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { Dispatch, SetStateAction } from "react";
import { IForgotPasswordInput } from "@/types/types";


type ForgotPasswordProps = {
    setActiveStep: Dispatch<SetStateAction<number>>
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setActiveStep }) => {

    const { loading, sendFormDataByForgotPassword, error } = useForgotPassword<IForgotPasswordInput>(
        path.endpoints.auth.forgotPassword as string
    );

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useFormContext<IForgotPasswordInput>()

    const onSubmit: SubmitHandler<IForgotPasswordInput> = async (formData: IForgotPasswordInput) => {


        const { success, message } = await sendFormDataByForgotPassword(formData);

        if (typeof error === "string") {
            toast.error(error);
            return;
        }


        if (success) {
            toast.success(message as string);
            setActiveStep((prev: number) => prev + 1)
        }

    }


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

                {/* EMAIL */}
                <EmailInput errors={errors} register={register} />

                <ShadButton
                    className={`${loading && "animate-pulse"
                        } bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]`}
                    type="submit"
                >
                    Send
                </ShadButton>
            </motion.form>
        </>
    )
}

export default ForgotPassword