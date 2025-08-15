"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useEffect, useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(true);

  // Ensure visibility on mount (always on top from start)
  useEffect(() => {
    setShowOnScroll(true);
  }, []);

  return (
    <Navbar
      className={`${className ?? ""} !fixed !top-0 !inset-x-0 !z-[9999]
        w-full transition-all duration-500 ease-out
        ${showOnScroll ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-100 translate-y-0 pointer-events-auto"}
      `}
    >
      {/* Desktop Navigation */}
     
      <NavBody>
     
        <NavbarLogo />
        <NavItems className="text-sm font-regular quantico-regular text-white-100" items={navItems} />
        <div className="flex items-center gap-4 quantico-regular">
        
          <NavbarButton
            as="a"
            href="#contact"
            variant="ghost"
            className="font-semibold"
          >
            CONTACT
          </NavbarButton>
          
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative px-6 py-3 quantico-regular rounded-full border border-sky-300/40 text-sky-200 shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] transition-colors duration-200 w-full text-center"
            >
              <span className="block quantico-regular">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-2">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#contact"
              className="relative px-6 py-3 quantico-regular rounded-full border border-sky-300/40 text-sky-200 shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] transition-colors duration-200 w-full text-center"
            >
              <span className="block quantico-regular">CONTACT</span>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
