import { TFunction } from "i18next";
import Image from "next/image";
import Arrow from "@/public/caret-down-filll-black.svg"
import { useState } from "react";

interface Props {
  t: TFunction,
  lng: string
  children: string
  name: string
}

export const AccordionBase = ({ t, lng, children, name }: Props) => {
  const [trigger, useTrigger] = useState(false)

  return (
    <>
      <button className="text-3xl w-full mt-8 flex justify-between" onClick={() => useTrigger((val) => !val)}>
        { name }
        <Image src={Arrow} width={20} height={20} alt=""></Image>
      </button>
      <article className={`${trigger ? 'block' : 'hidden'} bg-darkblue`}>
        { children }
      </article>
    </>
  )
}