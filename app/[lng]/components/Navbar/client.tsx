"use client"

import { NavbarBase } from "./NavbarBase"
import { useTranslation } from "@/app/i18n/client"

interface Props {
  lng: string
}

export const Navbar = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "navbar", undefined)

  return <NavbarBase t={t} lng={lng} />
}