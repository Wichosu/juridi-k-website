import { ContactUsBase } from "./ContactUsBase";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  lng: string
}

export const ContactUs = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "contact-us")

  return (
    <ContactUsBase t={t} lng={lng} />
  )
}