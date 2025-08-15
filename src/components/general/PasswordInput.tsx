import { Input } from "@/components/ui/input";
import { IoEyeOffOutline } from "react-icons/io5";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const PasswordInput = ({ register, errors }: PasswordInputProps) => {
  return (
    <>
      <div className="relative w-full group mt-4">
        <IoEyeOffOutline
          className={`absolute left-3 top-1/2 -translate-y-1/2 
          w-5 h-5 text-[#4B4B4B] 
          group-focus-within:text-[#4A73EA] ${errors.password
              ? "text-[#D00416] group-focus-within:text-[#D00416]"
              : ""
            }`}
        />
        <Input
          className={`h-12 pl-10 pr-[13px] 
          focus:border-[#4A73EA] 
          font-medium 
          placeholder:text-[#4B4B4B] !font-roboto text-[16px] 
          border-[#939393] shadow-md w-full ${errors.password
              ? "border-[#D00416] text-[#D00416] focus:border-[#D00416] placeholder:text-[#D00416] focus:placeholder:text-[#D00416]"
              : "custom-shadow-input focus:text-[#4A73EA] focus:placeholder:text-[#4A73EA]"
            }`}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
      </div>
      {errors.password && (
        <span className="text-red-500 text-sm font-roboto font-medium">
          {String(errors.password.message)}
        </span>
      )}
    </>
  );
};

export default PasswordInput;
