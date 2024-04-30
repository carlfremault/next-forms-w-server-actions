import { MessageCreateForm } from "@/components/MessageCreateForm";
import { MessageList } from "@/components/MessageList";

export default function Home() {
  return (
    <main className="p-4">
      <MessageCreateForm />
      <MessageList />
    </main>
  );
}
