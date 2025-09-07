import type { FormElementProps } from "@/types/types";
import {
  FormControl,
  FormGroup,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

const FormTextArea: React.FC<FormElementProps> = ({
  label,
  Icon,
  htmlFor,
  identification,
  name,
  placeholder,
  value,
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
        <FormGroup className="relative flex ">
          {Icon && (
            <Icon
              className="absolute top-2.5 left-2 text-neutral-400"
              size={25}
            />
          )}
          <TextareaAutosize
            minRows={3}
            maxRows={4}
            placeholder={placeholder}
            id={identification}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readonly}
            style={{
              height: "48px",
              border: "2px solid #a1a1a1",
              borderRadius: "8px",
              paddingLeft: "40px",
              paddingTop: "8px",
            }}
          />
        </FormGroup>
      </FormControl>
    </FormGroup>
  );
};

export default FormTextArea;
