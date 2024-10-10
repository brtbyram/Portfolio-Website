"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

function MobileNav() {

    const pathname = usePathname()

    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'services',
            path: '/services'
        },
        {
            name: 'resume',
            path: '/resume'
        },
        {
            name: 'work',
            path: '/work'
        },
        {
            name: 'contact',
            path: '/contact'
        }
    ]

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-3xl text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/" className="text-4xl font-semibold">
                <h1>Bemuba<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => (
                    <Link key={index} href={link.path} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav