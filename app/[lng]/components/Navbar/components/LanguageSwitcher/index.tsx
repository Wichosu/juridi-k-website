import { useTranslation } from "@/app/i18n";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = useTranslation(lng, "switcher")
  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}