import React from 'react';
import { logo } from '@/public/images';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 bg-transparent z-50">
      <a className="block w-[12rem] xl:mr-8" href="#hero">
        <img src={logo.src} width={190} height={40} alt="Jaxon Investments logo" />
      </a>
    </div>
  );
};

export default Header;
