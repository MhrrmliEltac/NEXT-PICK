import { Input } from "@/components/ui/input";
import { FormData } from "@/types/types";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FaMobileAlt, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { animateVariant } from "@/utils/animateVariants";
import { IoEyeOffOutline } from "react-icons/io5";
import { ShadButton } from "@/components/ui/button";
import { toast } from "sonner";

const InfoForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useFormContext<FormData>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const isValidPasswordMatch =
    password && confirmPassword && password === confirmPassword;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (password === confirmPassword) {
      toast.success("Registration completed successfully.");
      console.log(data);
      return;
    }

    toast.error("Password doesn't match");
  };

  return (
    <form className="flex flex-col gap-6">
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
        className="relative group"
      >
        <FaRegUser
          className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]`}
          placeholder="First name"
          type="text"
          {...register("firstName")}
        />
      </motion.div>
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <FaRegUser
          className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]`}
          placeholder="Surname"
          type="text"
          {...register("surname")}
        />
      </motion.div>
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="relative group"
      >
        <FaRegCalendarAlt
          className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]`}
          placeholder="Date of birth"
          type="date"
          {...register("birthDate")}
        />
      </motion.div>
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="relative group"
      >
        <FaMobileAlt
          className={`absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-[#4B4B4B] 
                  group-focus-within:text-[#4A73EA]`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]`}
          placeholder="Phone number"
          type="tel"
          {...register("phoneNumber")}
        />
      </motion.div>
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
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
          })}
        />
      </motion.div>
      {confirmPassword && !isValidPasswordMatch && (
        <span className="text-red-500 text-sm font-roboto font-medium">
          Passwords do not match
        </span>
      )}

      {confirmPassword && isValidPasswordMatch && (
        <span className="text-green-600 text-sm font-roboto font-medium">
          Passwords match ✅
        </span>
      )}
      <motion.div
        variants={animateVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <ShadButton
          disabled={!isValidPasswordMatch}
          onClick={handleSubmit(onSubmit)}
          className="bg-[#1A4DE1] hover:bg-[#1A4DE1] flex items-center justify-center rounded-[8px] text-base font-roboto !py-[15px]"
        >
          Continue
        </ShadButton>
      </motion.div>
    </form>
  );
};

export default InfoForm;
