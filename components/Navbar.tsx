import Link from "next/link";

interface NavItems {
  href: string;
  label: string;
}

export default function Navbar() {
  const navItems: NavItems[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact us",
    },
    {
      href: "/gacom",
      label: "GACOM",
    },
  ];

  return (
    <nav className="flex items-center justify-around py-4 bg-slate-500/30">
      <h1 className="font-bold text-5xl">LOGO</h1>

      <ul className="flex items-center gap-4">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
