import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-neutral-600 text-white lg:px-32 p-3 text-center border-b-4 border-blue-500 mb-5">
      <div className="text-3xl font-bold mb-3">
        <Link href="/">Taifur Dev</Link>
      </div>
      <div className="space-x-6">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/about/team">
          Our Team
        </Link>
        <Link className="hover:underline" href="/code/repos">
          Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
