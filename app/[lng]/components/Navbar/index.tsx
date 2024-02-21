import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { languages } from "@/app/i18n/settings";
import { Trans } from "react-i18next";
import Image from "next/image";
import LogoBig from "../../../../public/juridi-k-logo.svg"
import BurgerIcon from "../../../../public/list.svg"

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "navbar")

  return (
    <nav className="flex justify-between px-8 py-4 bg-darkblue">
      <Image src={LogoBig} width={100} height={100} alt="juridi-k logo" className="cursor-pointer" />
      <Image src={BurgerIcon} width={40} height={40} alt="menu button" className="cursor-pointer"  />
      <aside className="absolute top-0 right-0 w-3/4 h-screen px-8 py-4 bg-darkblue">
        <Image src={BurgerIcon} width={20} height={20} />
        <h1 className="text-white">Inicio</h1>
      </aside>
    </nav>
  )
}