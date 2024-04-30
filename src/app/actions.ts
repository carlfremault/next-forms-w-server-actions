"use server";

import { revalidatePath } from "next/cache";

type Message = {
  id: string;
  text: string;
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

export const getMessages = async (): Promise<Message[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  return Promise.resolve(messages);
};

export const createMessage = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const text = formData.get("text") as string;

  messages.push({
    id: crypto.randomUUID(),
    text,
  });

  revalidatePath("/");
};
