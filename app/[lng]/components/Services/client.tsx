"use client"
import { ServicesBase } from "./ServicesBase";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  lng: string
}

export const Services = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "services", '')

  return (
    <ServicesBase t={t} lng={lng} />
  )
}