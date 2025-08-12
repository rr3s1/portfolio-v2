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
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
           
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              as="a"
              href="#contact"
              variant="ghost"
              className="w-full"
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
