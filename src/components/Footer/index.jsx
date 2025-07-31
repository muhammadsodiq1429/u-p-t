import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-green-400 ">
      <div className="flex h-20 items-center container justify-between">
        <Link>
          <div className="logo font-bold text-2xl">LOGOO</div>
        </Link>
        <div className="social-medias flex text-2xl gap-4">
          <Link
            className="cursor-pointer"
            target="blank"
            to={
              "https://www.instagram.com/muhammadsodiqmuhammadrosul?igsh=MW53Zm9hZzM0ZTFibA=="
            }
          >
            <FaSquareInstagram />
          </Link>
          <Link
            target="blank"
            className="cursor-pointer"
            to={"https://t.me/MuhammadSodiq1429"}
          >
            <BsTelegram />
          </Link>
          <Link
            target="blank"
            className="cursor-pointer"
            to={"https://github.com/muhammadsodiq1429"}
          >
            <FaGithub />
          </Link>
          <Link
            target="blank"
            className="cursor-pointer"
            to={"https://www.linkedin.com/in/muhammadsodiq-muhammadjonov/"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
