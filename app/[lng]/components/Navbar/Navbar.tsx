import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { languages } from "@/app/i18n/settings";
import { Trans } from "react-i18next";
import Image from "next/image";

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, 'navbar')

  return (
    <nav>
      <Image src={'/navbar-logo.png'} width={20} height={20} alt="juridi-k logo" />
      asd
    </nav>
  )
}