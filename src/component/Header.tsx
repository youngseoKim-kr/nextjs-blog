import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between item-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold ">Kys's Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/posts">posts</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
