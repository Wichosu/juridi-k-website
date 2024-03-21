import { useTranslation } from "@/app/i18n";
import { HeroBase } from "./HeroBase";

interface Props {
  lng: string
}

export const Hero = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "hero")

  return (
    <HeroBase t={t} lng={lng} />
  )
}