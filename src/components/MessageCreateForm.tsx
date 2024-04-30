"use client";

import { useFormState } from "react-dom";
import { createMessage } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";

const MessageCreateForm = () => {
  const [formState, action] = useFormState(createMessage, { message: "" });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        name="text"
        className="border-cyan-400 border-2 bg-cyan-700"
      />
      <SubmitButton label="Create" loading="Creating..." />
      <span className="font-bold">{formState.message}</span>
    </form>
  );
};

export { MessageCreateForm };
