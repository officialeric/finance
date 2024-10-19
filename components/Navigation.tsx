"use client";

import NavButton from "./NavButton";
import { usePathname } from "next/navigation";

const routes = [
    {
        href : '/',
        label : 'Overview',
    },
    {
        href : '/transactions',
        label : 'Transactions',
    },
    {
        href : '/accounts',
        label : 'Accounts',
    },
    {
        href : '/categories',
        label : 'Categories',
    },
    {
        href : '/settings',
        label : 'Settings',
    },
]

const Navigation = () => {

    const pathname = usePathname()

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-auto">
        {routes.map((route) => (
            <NavButton
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href}
            />
        ))}
    </nav>
  )
}

export default Navigation
