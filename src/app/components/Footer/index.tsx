import { Mail, MapPinCheckInside, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#2c2a49] py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                Northridge Boarding Care
              </span>
            </Link>
            <p className="text-sm text-white">
              Providing compassionate care and support for seniors and their
              families since 2005.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[22px] font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-[22px] font-medium text-white">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                In-Home Care
              </Link>
              <Link
                href="/services"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Companionship
              </Link>
              <Link
                href="/services"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Personal Care
              </Link>
              <Link
                href="/services"
                className="w-[max-content] text-sm text-white transition-all border-b-2 border-transparent hover:border-white"
              >
                Medication Reminders
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-[22px] font-medium text-white">Contact</h3>
            <div className="text-sm text-white space-y-2">
              <div className="flex gap-2 items-center">
                <MapPinCheckInside className="w-5 text-[#ff7558]" />
                8754 Winnetka ave, Northridge, CA 91325
              </div>

              <div className="flex gap-2 items-center">
                <Phone className="w-5 text-[#ff7558]" />
                Phone: +1 (818) 795-2953
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-5 text-[#ff7558]" />
                Email: Northridgeboardingcare@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 border-opacity-90 pt-6">
          <p className="text-sm text-white text-center pt-[15px] pb-[15px]">
            © {new Date().getFullYear()} Northridge Boarding Care Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
