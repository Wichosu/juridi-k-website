"use client"

import { NavbarBase } from "./NavbarBase"
import { useTranslation } from "@/app/i18n/client"

export const Navbar = ({ lng }) => {
  const { t } = useTranslation(lng, "navbar")

  return <NavbarBase t={t} lng={lng} />
}