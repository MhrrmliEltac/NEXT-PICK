import { NEUTRAL_COLOR } from "@/constant/colors";
import { animateVariant } from "@/utils/animateVariants";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { ShadButton } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/types/types";

const OTPForm = ({
  setActiveStep,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
}) => {
  const { getValues } = useFormContext<FormData>();
  const email = getValues("email");
  const [otpCode, setOtpCode] = useState<string | undefined>("");

  const next = () => {
    if (otpCode) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const isValid = (otpCode?.length ?? 0) > 5;

  return (
    <form>
      <Box
        component={motion.div}
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        sx={{ mb: "32px" }}
      >
        <Typography variant="body2" fontSize="14px" mb={1.5}>
          {`Check your email inbox! Enter the 6-digit verification code sent to ${email}. The code expires after 60 minutes.`}
        </Typography>

        <Button
          LinkComponent="a"
          href="/auth/register"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            background: "transparent",
            color: NEUTRAL_COLOR.neutral800,
            textTransform: "none",
            padding: 0,
            minHeight: "auto",
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <Typography variant="h6" fontSize={16}>
            Change email address
          </Typography>
        </Button>
      </Box>

      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <Typography
          component="span"
          variant="body2"
          fontSize={12}
          color={NEUTRAL_COLOR.neutral650}
          sx={{
            marginBottom: "8px",
          }}
        >
          Enter the 6-digit code
        </Typography>

        <InputOTP
          maxLength={6}
          value={otpCode}
          onChange={(value) => setOtpCode(value)}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot className="w-[42px] h-[45px]" index={0} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot className="w-[45px] h-[45px]" index={1} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot className="w-[45px] h-[45px]" index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot className="w-[45px] h-[45px]" index={3} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot className="w-[45px] h-[45px]" index={4} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot className="w-[45px] h-[45px]" index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button sx={{ p: 0, m: 0, textTransform: "none" }}>
          <Typography
            variant="body2"
            color={NEUTRAL_COLOR.neutral800}
            fontSize={12}
            sx={{ textDecoration: "underline" }}
          >
            Send new code
          </Typography>
        </Button>
      </motion.div>

      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className="w-full mt-8"
      >
        <ShadButton
          disabled={!isValid}
          onClick={next}
          className="w-full bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]"
        >
          Continue
        </ShadButton>
      </motion.div>
    </form>
  );
};

export default OTPForm;
