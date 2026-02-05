'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import Container from "../Layout/Contianer"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Company Formation", href: "#" },
  { name: "Services", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact Us", href: "#" },
]

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // if scroll down and not at top, hide
          setIsVisible(false)
        } else {
          // if scroll up or at top, show
          setIsVisible(true)
        }

        // Add background if scrolled more than 20px
        setIsScrolled(window.scrollY > 20)

        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
        } ${isScrolled
          ? "bg-gradient-to-r from-[#05030f]/90 via-[#0b0718]/90 to-[#05030f]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-6"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between  py-4 gap-4">
          <Logo />
          <DesktopNav active={active} setActive={setActive} />
          <MobileToggle open={mobileOpen} setOpen={setMobileOpen} />
        </div>
      </Container>

      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </div>
  )
}

/* ---------------- LOGO ---------------- */

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-15 w-[160px]  lg:w-[220px] flex-shrink-0">
        <Image
          src="/assets/images/logo/invest-first.png"
          alt="Invest First Logo"
          fill
          className=" object-contain md:object-cover"
          priority
        />
      </div>
    </Link>
  )
}

/* ---------------- DESKTOP NAV ---------------- */

function DesktopNav({ active, setActive }) {
  return (
    <nav className="hidden md:flex max-w-full overflow-hidden items-center gap-4 lg:gap-8 xl:gap-12 rounded-xl border border-[#0099CC] bg-white/5 px-4 lg:px-6 py-3 backdrop-blur-md">

      {navItems.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          active={active}
          setActive={setActive}
        />
      ))}
    </nav>
  )
}

/* ---------------- NAV ITEM ---------------- */

function NavItem({ item, active, setActive }) {
  const hasDropdown = item.name !== "Home" && item.name !== "Contact Us"

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(item.name)}
      onMouseLeave={() => setActive(null)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm lg:text-base text-gray-200 hover:text-white transition"
      >
        {item.name}
        {hasDropdown && <ChevronDown size={14} />}
      </Link>

      {active === item.name && hasDropdown && (
        <div className="absolute left-1/2 top-full mt-3 w-40 -translate-x-1/2 rounded-xl bg-[#0b0718] border border-white/10 p-3 shadow-xl">
          <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
            Option 1
          </p>
          <p className=" text-sm text-gray-300 hover:text-white cursor-pointer mt-2">
            Option 2
          </p>
        </div>
      )}
    </div>
  )
}

/* ---------------- MOBILE TOGGLE ---------------- */

function MobileToggle({ open, setOpen }) {
  return (
    <button
      className="md:hidden text-white"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  )
}

/* ---------------- MOBILE MENU ---------------- */

function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-[#05030f] transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="p-8 space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block text-sm text-gray-200 hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
