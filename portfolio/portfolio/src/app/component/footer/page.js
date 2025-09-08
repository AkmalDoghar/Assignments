"use client";
import Link from "next/link";
import { BiUpArrowAlt } from "react-icons/bi";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="scroll-scale">
        Copyright &copy; 2024 by <span>Akmal</span> All Rights Reserved.
      </p>
      <Link href="#home" className=" scroll-top">
        <BiUpArrowAlt size={24} /> 
      </Link>
    </footer>
  );
}
