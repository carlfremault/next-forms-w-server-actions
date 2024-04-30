"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

type Message = {
  id: string;
  text: string;
};

type FormState = {
  message: string;
};

let messages: Message[] = [
  {
    id: crypto.randomUUID(),
    text: "First Message",
  },
  {
    id: crypto.randomUUID(),
    text: "Second Message",
  },
  {
    id: crypto.randomUUID(),
    text: "Third Message",
  },
];

const createMessageSchema = z.object({
  text: z.string().min(1).max(191),
});

export const getMessages = async (): Promise<Message[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return Promise.resolve(messages);
};

export const createMessage = async (
  formState: FormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const { text } = createMessageSchema.parse({
      text: formData.get("text"),
    });

    messages.push({
      id: crypto.randomUUID(),
      text,
    });
  } catch (error) {
    return {
      message: "Something went wrong",
    };
  }

  revalidatePath("/");

  return {
    message: "Message created",
  };
};
