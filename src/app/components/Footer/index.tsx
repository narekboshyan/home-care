import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold text-blue-900">
                Northridge Boarding Care
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Providing compassionate care and support for seniors and their
              families since 2005.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-900">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-900">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                In-Home Care
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Companionship
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Personal Care
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                Medication Reminders
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-900">Contact</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>8754 Winnetka ave</p>
              <p>Northridge, CA 91325</p>
              <p>Phone: +1 (818) 795-2953</p>
              <p>Email: Northridgeboardingcare@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Northridge Boarding Care Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
