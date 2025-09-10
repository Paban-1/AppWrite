import React from "react";
import { Logo } from "../index";

const Footer = () => {
  return (
    <div className="fixed border w-full py-4 bottom-0 flex justify-between px-8">
      <h2>This is Footer</h2>
      <Logo />
    </div>
  );
};

export default Footer;
