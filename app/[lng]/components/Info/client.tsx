import { InfoBase } from "./InfoBase";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  lng: string
}

export const Info = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "info", '')

  return (
    <InfoBase t={t} lng={lng} />
  )
}