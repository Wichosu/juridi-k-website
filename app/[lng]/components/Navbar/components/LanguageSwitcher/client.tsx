"use client"
import { useTranslation } from "@/app/i18n/client";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = ({ lng }) => {
  const { t } = useTranslation(lng, "langs")

  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}