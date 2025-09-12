import { FormControl, FormGroup, FormLabel } from "@mui/material";
import React from "react";
import { Input } from "../ui/input";
import { FormElementProps } from "@/types/types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FormElement: React.FC<FormElementProps> = ({
  label,
  Icon,
  htmlFor,
  identification,
  name,
  placeholder,
  value,
  type = "text",
  readonly = true,
  onChange,
}) => {
  return (
    <FormGroup>
      <FormControl>
        <FormLabel
          htmlFor={htmlFor}
          className="!text-neutral800 !text-sm !font-medium"
        >
          {label}
        </FormLabel>
        <FormGroup className="relative flex">
          {Icon && type !== "tel" && (
            <Icon
              className="absolute top-2.5 left-2 text-neutral-400"
              size={25}
            />
          )}
          {type === "tel" ? (
            <PhoneInput
              defaultCountry="AZ"
              value={value}
              readOnly={readonly}
              placeholder={placeholder}
              onChange={(phone) => {
                const normalizedValue = phone ?? "";
                if (onChange) {
                  onChange({
                    target: {
                      value: normalizedValue,
                      name: name,
                    },
                  } as any);
                }
              }}
              className="w-full h-[48px] border-neutral-400 border-2 pl-2"
            />
          ) : (
            <Input
              readOnly={readonly}
              type={type}
              value={value}
              placeholder={placeholder}
              id={identification}
              name={name}
              onChange={onChange}
              className="w-full h-[48px] border-neutral-400 border-2 pl-10"
            />
          )}
        </FormGroup>
      </FormControl>
    </FormGroup>
  );
};

export default FormElement;
