"use client"

import { TFunction } from "i18next";
import { AboutUsBase } from "./AboutUsBase";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  lng: string
}

export const AboutUs = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "about-us", '')

  return (
    <AboutUsBase t={t} lng={lng} />
  )
}