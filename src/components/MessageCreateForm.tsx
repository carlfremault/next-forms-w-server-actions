"use client";

import { createMessage } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";

const MessageCreateForm = () => {
  return (
    <form action={createMessage} className="flex flex-col gap-y-2">
      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        name="text"
        className="border-cyan-400 border-2 bg-cyan-700"
      />
      <SubmitButton label="Create" loading="Creating..." />
    </form>
  );
};

export { MessageCreateForm };
