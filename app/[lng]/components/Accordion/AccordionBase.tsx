import { TFunction } from "i18next";
import Image from "next/image";
import Arrow from "@/public/caret-down-filll-black.svg"
import { useState } from "react";
import { useRef } from "react";

interface Props {
  t: TFunction,
  lng: string
  children: string
  name: string
}

export const AccordionBase = ({ t, lng, children, name }: Props) => {
  const [trigger, useTrigger] = useState(false)
  const [scrollHeight, useScrollHeight] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)

  const triggerAccordion = () => {
    useTrigger((val) => !val)
//    useScrollHeight(articleRef.current?.scrollHeight || 0)
//    console.log(scrollHeight)
  }

  return (
    <div>
      <button className="text-3xl w-full flex justify-between" onClick={triggerAccordion}>
        { name }
        <Image src={Arrow} width={20} height={20} alt="" className={`${trigger ? 'rotate-180' : 'rotate-0'} transition-all`}></Image>
      </button>
      <article className={`${trigger ? `block` : 'hidden'} mt-4 transition-all`} ref={ articleRef }>
        { children }
      </article>
    </div>
  )
}