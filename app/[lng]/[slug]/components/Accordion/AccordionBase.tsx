import Image from "next/image";
import Arrow from "@/public/caret-down-filll-black.svg"
import { useState } from "react";
import { useRef } from "react";
import { PortableText } from "next-sanity";

interface Props {
  portableText: any
  name: string
}

export const AccordionBase = ({ portableText, name }: Props) => {
  const [trigger, useTrigger] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)

  const triggerAccordion = () => {
    useTrigger((val) => !val)
  }

  return (
    <div>
      <button className="text-3xl w-full flex justify-between" onClick={triggerAccordion}>
        { name }
        <Image src={Arrow} width={20} height={20} alt="" className={`${trigger ? 'rotate-180' : 'rotate-0'} transition-all`}></Image>
      </button>
      <div
        className={`${trigger ? `block` : 'hidden'} mt-4 transition-all`} 
        ref={ articleRef }
      >
        <PortableText value={portableText} />
      </div>
    </div>
  )
}