import { FormState } from "@/app/utils";
import { useEffect, useRef } from "react";

const useFormReset = (formState: FormState) => {
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return;
    if (
      formState.status === "SUCCESS" &&
      formState.timestamp !== prevTimestamp.current
    ) {
      formRef.current.reset();
      prevTimestamp.current = formState.timestamp;
    }
  }, [formState]);

  return formRef;
};

export { useFormReset };
