import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { FormState } from "@/app/utils";

const useToastMessage = (formState: FormState) => {
  const prevTimestamp = useRef(formState.timestamp);

  const showToast =
    formState.message && prevTimestamp.current !== formState.timestamp;

  useEffect(() => {
    if (showToast) {
      if (formState.status === "ERROR") {
        toast.error(formState.message);
      } else {
        toast.success(formState.message);
      }

      prevTimestamp.current = formState.timestamp;
    }
  }, [formState, showToast]);

  return (
    <noscript>
      {formState.status === "ERROR" && (
        <div style={{ color: "red" }}>{formState.message}</div>
      )}

      {formState.status === "SUCCESS" && (
        <div style={{ color: "green" }}>{formState.message}</div>
      )}
    </noscript>
  );
};

export { useToastMessage };
