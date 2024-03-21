import { TFunction } from "i18next"
import Image from "next/image"
import RightArrow from "@/public/arrow-right.svg"

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const HeroBase = ({ t, lng }: Props) => {
  return (
    <section className="bg-darkblue text-white px-8 py-4">
      <h1 className="text-3xl py-4">JURIDI-K Es Una Firma de Abogados</h1>
      <p className="text-sm">Nuestro objetivo es brindar a nuestros representantes proyectos estratégicos diseñados para dar soluciones a las situaciones jurídicas que nos confierean.</p>
      <div className="bg-darkred flex justify-around py-4 my-4 cursor-pointer">
        <div>
          <p className="text-xs">¿Quieres Contactar?</p>
          <h2 className="text-xl">Solicita una cita</h2>
        </div>
        <Image src={RightArrow} width={35} height={35} alt="Make an appointment" />
      </div>
    </section>
  )
}