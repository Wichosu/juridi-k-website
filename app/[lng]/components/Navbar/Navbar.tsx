import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { languages } from "@/app/i18n/settings";
import { Trans } from "react-i18next";

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'navbar')

  return (
    <nav>

    </nav>
  )
}