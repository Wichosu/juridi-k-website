import { AccordionBase } from "./AccordionBase";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  lng: string
  locale: string
  children: string
  name: string
}

export const Accordion = ({ lng, locale, children, name }: Props) => {
  const { t } = useTranslation(lng, locale)

  return (
    <AccordionBase t={t} lng={lng} name={name}>
      { children }
    </AccordionBase>
  )
}