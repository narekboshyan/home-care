"use client";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2 px-3">
          <span className="text-xl font-bold text-blue-900">
            Northridge Boarding Care
          </span>
        </Link>
        <nav className="hidden md:flex gap-12">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-blue-700 hover:bg-blue-800 cursor-pointer">
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
        <div className="container md:hidden py-4 pb-6 border-t">
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
              <Button className="w-full bg-blue-700 hover:bg-blue-800 mt-2">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
