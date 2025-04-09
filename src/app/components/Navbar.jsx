"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser, setUsers } from '../../stores/action_creators';
import { useRouter } from 'next/navigation';

const NavLinks = [
    {
        id: 1,
        title: "A propos",
        path: "/about",
    },
    {
        id: 2,
        title: "Mes Projets",
        path: "/projets",
    },
    {
        id: 3,
        title: "Contact",
        path: "/contact",
    },
    {
        id: 4,
        title: "Témoignages",
        path: "/temoignage",
    }
];

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const router = useRouter();

    const disconnect = () => {
        dispatch(logout());
        dispatch(setUsers([]));
        dispatch(setUser({}));
        router.push("/login");
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    <Image src="/images/Logo.png" alt='Logo' width={50} height={50}/>
                </Link>

                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:flex-row md:space-x-8 mt-0'>
                        {NavLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}

                        {!token ? (
                            <li>
                                <NavLink href="/login" title="Login" />
                            </li>
                        ) : (
                            <li>
                                <button onClick={disconnect} className='text-[#ABD7BE] hover:text-white sm:text-xl'>
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
    );
}
