"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="hidden lg:flex w-72 h-screen p-5 shadow-md shadow-purple-200">
      <div className="flex flex-col gap-4 size-full">
        <Link href="/" className="flex justify-center py-2 gap-2">
          <Image
            alt="logo"
            src="/svg/image.png"
            width={180}
            height={28}
            className="object-contain"
          />
        </Link>

        <div className="h-full flex flex-col gap-4 justify-between">
          <SignedIn>
            <ul className="flex flex-col gap-2 items-start w-full">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathName === link.route;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element  group ${
                      isActive
                        ? " text-white bg-purple-500"
                        : "text-gray-700"
                    }`}
                  >
                    <Link
                      href={link.route}
                      className="flex gap-4 leading-[140%] font-semibold size-full p-4"
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-col gap-2 items-start w-full">
              {navLinks.slice(6).map((link) => {
                const isActive = pathName === link.route;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element  group ${
                      isActive
                        ? "text-white  bg-purple-500"
                        : "text-gray-700"
                    }`}
                  >
                    <Link
                      href={link.route}
                      className="flex gap-4 leading-[140%] font-semibold size-full p-4"
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="cursor-pointer flex items-center w-full rounded-full  gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName/>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <button  className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in" className="text-black size-full hover:bg-purple-500 p-4 rounded-full hover:text-white bg-purple-300">Login</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
