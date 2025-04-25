"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2 px-3">
          <Image
            src="/care-northridge.png"
            width={36}
            height={36}
            alt="Northridge Boarding Care"
          />
          <span className="text-xl font-bold text-blue-900">
            Northridge Boarding Care
          </span>
        </Link>
        <nav className="hidden md:flex gap-12">
          <Link
            href="/"
            className="text-md font-medium hover:text-blue-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-md font-medium hover:text-blue-900 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-md font-medium hover:text-blue-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium hover:text-blue-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-[#ff7558] hover:bg-[#ff5e3a] text-white hover:text-[white] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 border-t px-2">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#ff7558]">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
