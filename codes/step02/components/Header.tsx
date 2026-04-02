import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full p-4 border-b bg-primary text-primary-foreground flex items-center justify-center">
      <nav className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </nav>
    </div>
  );
}
