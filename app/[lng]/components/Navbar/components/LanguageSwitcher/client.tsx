"use client"
import { useTranslation } from "@/app/i18n/client";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = ({ lng }) => {
  const { t } = useTranslation(lng, "switcher")

  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}