import { FormState } from "@/app/utils";
import React from "react";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};
const FieldError = ({ formState, name }: FieldErrorProps) => {
  return (
    <span className="text-xs text-red-400">
      {formState.fieldErrors[name]?.[0]}
    </span>
  );
};

export { FieldError };
