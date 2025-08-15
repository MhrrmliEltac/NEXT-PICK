import { Input } from "@/components/ui/input";
import { MdOutlineMailOutline } from "react-icons/md";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormType } from "@/types/types";

interface EmailInputProps {
  register: UseFormRegister<FormType>;
  errors: FieldErrors;
}

const EmailInput = ({ register, errors }: EmailInputProps) => {
  return (
    <>
      <div className="relative w-full group">
        <MdOutlineMailOutline
          className={`absolute left-3 top-1/2 -translate-y-1/2 
          w-5 h-5 text-[#4B4B4B] 
          group-focus-within:text-[#4A73EA] ${errors.email
              ? "text-[#D00416] group-focus-within:text-[#D00416]"
              : ""
            }`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full ${errors.email
              ? "border-[#D00416] text-[#D00416] focus:border-[#D00416] placeholder:text-[#D00416] focus:placeholder:text-[#D00416]"
              : "custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]"
            }`}
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </div>
      {errors.email && (
        <span className="text-red-500 text-sm font-roboto font-medium">
          {String(errors.email.message)}
        </span>
      )}
    </>
  );
};

export default EmailInput;
