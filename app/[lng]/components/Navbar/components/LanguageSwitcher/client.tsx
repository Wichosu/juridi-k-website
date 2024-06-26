"use client"
import { useTranslation } from "@/app/i18n/client";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

interface Props {
  lng: string
}

export const LanguageSwitcher = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "langs", '')

  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}