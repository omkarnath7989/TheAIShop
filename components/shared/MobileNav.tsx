"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname() 
  return (
    <header className="header">
      <Link href="/" className="flex items-center md:py-2 gap-2">
        <Image
          src="/svg/image.png"
          alt="logo"
          width={128}
          height={20}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        <Sheet >
          <SheetTrigger>
            <Image 
             src="/assets/icons/menu.svg"
             width={32}
             height={32}
             alt="menu"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
            <Image 
             src="/svg/logo-no-background.png"
             width={128}
             height={28}
             alt="logo"
            />

            <ul className="flex flex-col w-full mt-8 items-start gap-5">
              {navLinks.map((link) => {
                const isActive = pathName === link.route ; 
                return (
                  <li className={`${isActive && "text-purple-600"} p-18 flex whitespace-nowrap text-dark-700 hover:text-purple-400`} key={link.route}>
                    <Link 
                    href={link.route}
                    className="sidebar-link cursor-pointer"
                    >
                    <Image 
                     src={link.icon}
                     width={24}
                     height={24}
                     alt="icon"
                    />
                    {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            </>
          </SheetContent>
        </Sheet>
        </SignedIn>
        <SignedOut>
          <button className=" bg-purple-100 rounded-full p-3">
            <Link href="/sign-in">Sign In</Link>
          </button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
