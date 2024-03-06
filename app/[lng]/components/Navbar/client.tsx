"use client"

import { NavbarBase } from "./NavbarBase"
import { useTranslation } from "@/app/i18n/client"

export const Navbar = ({ lng }) => {
  return <NavbarBase lng={lng} />
}