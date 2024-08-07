import { TFunction } from "i18next"
import Image from "next/image"
import RightArrow from "@/public/arrow-right.svg"
import Hero from "@/public/hero.jpg"

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const HeroBase = ({ t, lng }: Props) => {
  return (
    <section className="bg-darkblue text-white ">
      <div className="mx-auto px-8 py-4 grid gap-4 lg:flex lg:justify-between lg:max-w-screen-xl">
        <div>
          <h1 className="text-3xl py-4">{ t("title") }</h1>
          <p className="text-sm lg:w-fit lg:max-w-md">{ t("description") }</p>
          <a className="bg-darkred flex justify-around py-4 my-4 cursor-pointer lg:w-fit lg:px-8" href="https://wa.me/5217822143078" target="_blank">
            <div className="lg:mr-8">
              <p className="text-xs">{ t("button_subheader") }</p>
              <h2 className="text-xl">{ t("button_header") }</h2>
            </div>
            <Image src={RightArrow} width={35} height={35} alt="Make an appointment" />
          </a>
        </div>
        <Image 
          src={Hero} 
          width={600} 
          height={600} 
          alt="Picture of the team" 
          className="hidden lg:block" 
          />
      </div>
    </section>
  )
}