"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed bottom-5 bg-gradient-to-br from-[#4b4b4f] to-[#313034] rounded-full p-0.3 min-w-72 drop-shadow-xl">
      <div className="flex h-full w-full items-center bg-gradient-to-br from-[#2f2e33] to-[#2b2a2e] text-white rounded-full px-4 py-2 gap-3 justify-between">
        
        <a href="/letters" className="relative flex items-center justify-center font-semibold">
          {isActive('/letters') ? (
            <img src="/letter-filled.svg" alt="letter" />
          ) : (
            <img src="/letter.svg" alt="letter" />
          )}
        </a>

        <a href="/work" className="relative flex items-center justify-center font-semibold">
          {isActive('/work') ? (
            <img src="/bag-filled.svg" alt="bag" />
          ) : (
            <img src="/bag.svg" alt="bag" />
          )}
        </a>

        <a href="https://x.com/animeshryu" target="_blank" className="relative flex items-center justify-center font-semibold">
          {isActive('/x') ? (
            <img src="/x-filled.svg" alt="x" />
          ) : (
            <img src="/x.svg" alt="x" />
          )}
        </a>

        <a href="https://www.instagram.com/animeshryu/" target='_blank' className="relative flex items-center justify-center font-semibold">
          {isActive('/insta') ? (
            <img src="/insta-filled.svg" alt="insta" />
          ) : (
            <img src="/insta.svg" alt="insta" />
          )}
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
