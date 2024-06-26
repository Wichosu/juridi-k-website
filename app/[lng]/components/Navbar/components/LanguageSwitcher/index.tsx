import { useTranslation } from "@/app/i18n";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

interface Props {
  lng: string
}

export const LanguageSwitcher = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "langs")

  return (
    <LanguageSwitcherBase t={t} lng={lng} />
  )
}