import { TFunction } from "i18next";
import Image from "next/image";
import RightArrow from "@/public/arrow-right.svg"
import Lawyers from "@/public/lawyers.jpg"

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const AboutUsBase = ({ t, lng }: Props) => {
  return (
    <section className="
        px-8 py-4 grid gap-4 lg:max-w-screen-xl lg:mx-auto lg:flex lg:flex-row-reverse
        lg:justify-between
      "
    >
      <div>
        <h1 className="text-3xl py-4">{ t("title") }</h1>
        <p className="text-sm">{ t("description") }</p>
        <div className="
            bg-darkred text-white flex justify-around px-8 py-4 my-4 cursor-pointer
            lg:w-fit
          "
        >
          <div className="lg:mr-8">
            <p className="text-xs">{ t("button_subheader") }</p>
            <h2 className="text-xl">{ t("button_header") }</h2>
          </div>
          <Image src={RightArrow} width={35} height={35} alt="Make an appointment" />
        </div>
      </div>
      <Image src={Lawyers} width={500} height={500} alt="" />
    </section>
  )
}