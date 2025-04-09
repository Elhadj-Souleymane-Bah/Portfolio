"use client";

import React from 'react';
import NavLink from './NavLink';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser, setUsers } from '../../stores/action_creators';
import { useRouter } from 'next/navigation';

const MenuOverlay = ({ links }) => {
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
        <ul className='flex flex-col py-4 items-center space-y-2'>
            {links.map((link) => (
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
    );
};

export default MenuOverlay;
