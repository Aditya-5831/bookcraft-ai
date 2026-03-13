"use client";

import { BookOpen, CreditCard, LogOut, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = true;

  return (
    <header>
      <div className="sticky top-0 z-50 mx-auto max-w-7xl border-b bg-white/80 px-6 backdrop-blur-lg lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex cursor-pointer items-center gap-2"
          >
            <BookOpen className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-500 p-2 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/40" />
            <span className="text-xl font-semibold tracking-tight">
              BookCraft AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-purple-50/50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-purple-50/50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-purple-50/50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-purple-50/50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </nav>

          {/* Desktop Auth buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none"
                >
                  <Button
                    aria-label="User menu"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-purple-500 font-semibold text-white transition-all duration-200 hover:scale-105"
                  >
                    A
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 px-4 py-5">
                  <DropdownMenuGroup className="space-y-2">
                    <div className="mb-5 flex flex-col items-center justify-center gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-lg font-medium text-white focus:ring-0 focus-visible:ring-0 focus-visible:outline-none">
                        A
                      </div>
                      <span className="text-sm font-bold">Jason Watson</span>
                    </div>
                    <DropdownMenuItem className="flex items-center gap-2 text-gray-700 transition-all duration-100">
                      <User className="h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="group flex items-center gap-2 text-gray-700 transition-all duration-100">
                      <CreditCard className="h-4 w-4" />
                      Billing
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator className="my-4" />
                    <DropdownMenuItem className="flex items-center gap-2 text-red-600 data-highlighted:text-red-600">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                    className:
                      "rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900",
                  })}
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "rounded-lg bg-linear-to-r from-blue-400 to-purple-500 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105",
                  })}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <button
            className="cursor-pointer transition-all duration-300 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-in slide-in-from-top fade-in z-0 border-t border-gray-100 bg-white duration-200 lg:hidden">
          {isAuthenticated && (
            <div className="mt-5 flex flex-col items-center justify-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-2xl font-medium text-white">
                A
              </div>
              <span className="font-bold">Jason Watson</span>
            </div>
          )}

          <nav className="space-y-1 p-4">
            <Link
              href="/"
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>

            {isAuthenticated ? (
              <button className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50">
                <LogOut className="h-4 w-4" />
                <span>Sign out</span>
              </button>
            ) : (
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-400 to-purple-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-105",
                })}
              >
                <span>Get Started</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
