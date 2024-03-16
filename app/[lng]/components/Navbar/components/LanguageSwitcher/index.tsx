import { useTranslation } from "@/app/i18n";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, "langs")

  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}