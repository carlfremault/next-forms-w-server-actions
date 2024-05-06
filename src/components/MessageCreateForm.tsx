"use client";

import { useFormState } from "react-dom";
import { createMessage } from "@/app/actions";
import { EMPTY_FORM_STATE } from "@/app/utils";
import { FieldError } from "@/components/FieldError";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormReset } from "@/hooks/useFormReset";
import { useToastMessage } from "@/hooks/useToastMessage";

const MessageCreateForm = () => {
  const [formState, action] = useFormState(createMessage, EMPTY_FORM_STATE);
  const noScriptFallback = useToastMessage(formState);
  const formRef = useFormReset(formState);

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-y-2">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        className="border-cyan-400 border-2 bg-cyan-700"
      />
      <FieldError formState={formState} name="title" />
      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        name="text"
        className="border-cyan-400 border-2 bg-cyan-700"
      />
      <FieldError formState={formState} name="text" />
      <SubmitButton label="Create" loading="Creating..." />
      {noScriptFallback}
    </form>
  );
};

export { MessageCreateForm };
