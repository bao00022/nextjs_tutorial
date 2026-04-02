import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full border-b h-24 bg-neutral-200 flex items-center justify-center">
      <div className="w-full max-w-4xl flex justify-between p-4">
        <h1 className="text-2xl font-bold">Welcome to the Snippets App</h1>
        <Button asChild>
          <Link href="/snippets">New Snippets</Link>
        </Button>
      </div>
    </div>
  );
}
