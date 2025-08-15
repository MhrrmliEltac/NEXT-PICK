import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

// Types
interface OTPVerificationProps {
    email: string;
    onVerify: (otpCode: string) => void | Promise<void>;
    onResendCode: () => void | Promise<void>;
    onEmailChange: () => void;
    isLoading?: boolean;
    error?: string | null;
    maxLength?: number;
    expiryMinutes?: number;
    path?: {
        urlPaths: {
            auth: {
                register: string;
            };
        };
    };
}

// Constants
const NEUTRAL_COLOR = {
    neutral800: '#1F2937',
    neutral650: '#6B7280',
} as const;

const REGEXP_ONLY_DIGITS_AND_CHARS = /^[0-9]+$/;

const animateVariant = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
} as const;

const OTPVerification: React.FC<OTPVerificationProps> = ({
    email,
    onVerify,
    onResendCode,
    onEmailChange,
    isLoading = false,
    error = null,
    maxLength = 6,
    expiryMinutes = 60,
}) => {
    const [otpCode, setOtpCode] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(expiryMinutes * 60);

    // Validate OTP code
    useEffect(() => {
        setIsValid(otpCode.length === maxLength && REGEXP_ONLY_DIGITS_AND_CHARS.test(otpCode));
    }, [otpCode, maxLength]);

    // Countdown timer
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Format time display
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (isValid && !isLoading) {
            onVerify(otpCode);
        }
    };

    const handleResendCode = (): void => {
        if (!isLoading) {
            onResendCode();
            setTimeLeft(expiryMinutes * 60);
        }
    };

    const handleEmailChange = (): void => {
        if (!isLoading) {
            onEmailChange();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                component={motion.div}
                variants={animateVariant}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                sx={{ mb: '32px' }}
            >
                <Typography variant="body2" fontSize="14px" mb={1.5}>
                    {`Check your email inbox! Enter the ${maxLength}-digit verification code sent to ${email}. The code expires after ${expiryMinutes} minutes.`}
                </Typography>

                <Button
                    onClick={handleEmailChange}
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    disableTouchRipple
                    disabled={isLoading}
                    sx={{
                        background: 'transparent',
                        color: NEUTRAL_COLOR.neutral800,
                        textTransform: 'none',
                        padding: 0,
                        minHeight: 'auto',
                        '&:hover': {
                            background: 'transparent',
                        },
                        '&:disabled': {
                            color: NEUTRAL_COLOR.neutral650,
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
                        marginBottom: '8px',
                    }}
                >
                    Enter the {maxLength}-digit code
                </Typography>

                <InputOTP
                    maxLength={maxLength}
                    value={otpCode}
                    onChange={(value: string) => setOtpCode(value)}
                    disabled={isLoading}
                >
                    {Array.from({ length: maxLength }, (_, index) => (
                        <InputOTPGroup key={index}>
                            <InputOTPSlot
                                className="w-[42px] h-[45px]"
                                index={index}
                                style={{
                                    border: error ? '1px solid #ef4444' : undefined,
                                }}
                            />
                        </InputOTPGroup>
                    ))}
                </InputOTP>

                {error && (
                    <Typography
                        variant="body2"
                        color="#ef4444"
                        fontSize={12}
                        sx={{ mt: 1 }}
                    >
                        {error}
                    </Typography>
                )}

                <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button
                        onClick={handleResendCode}
                        disabled={isLoading || timeLeft > 0}
                        sx={{
                            p: 0,
                            m: 0,
                            textTransform: 'none',
                            minWidth: 'auto',
                            '&:disabled': {
                                color: NEUTRAL_COLOR.neutral650,
                            },
                        }}
                    >
                        <Typography
                            variant="body2"
                            color={timeLeft > 0 ? NEUTRAL_COLOR.neutral650 : NEUTRAL_COLOR.neutral800}
                            fontSize={12}
                            sx={{ textDecoration: 'underline' }}
                        >
                            Send new code
                        </Typography>
                    </Button>

                    {timeLeft > 0 && (
                        <Typography
                            variant="body2"
                            color={NEUTRAL_COLOR.neutral650}
                            fontSize={12}
                        >
                            ({formatTime(timeLeft)})
                        </Typography>
                    )}
                </Box>
            </motion.div>

            <motion.div
                variants={animateVariant}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
                className="w-full mt-8"
            >
                <Button
                    type="submit"
                    disabled={!isValid || isLoading || timeLeft <= 0}
                    fullWidth
                    sx={{
                        backgroundColor: '#1A4DE1',
                        color: 'white',
                        borderRadius: '8px',
                        py: '15px',
                        fontSize: '16px',
                        fontFamily: 'Roboto, sans-serif',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#1A4DE1',
                        },
                        '&:disabled': {
                            backgroundColor: NEUTRAL_COLOR.neutral650,
                            color: 'white',
                        },
                    }}
                >
                    {isLoading ? 'Verifying...' : 'Continue'}
                </Button>
            </motion.div>
        </form>
    );
};

export default OTPVerification;
