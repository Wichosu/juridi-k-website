"use client"
import { useTranslation } from "@/app/i18n/client";
import { HeroBase } from "./HeroBase";

interface Props {
  lng: string
}

export const Hero = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "hero", undefined)

  return (
    <HeroBase t={t} lng={lng} />
  )
}