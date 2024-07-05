import { AccordionBase } from "./AccordionBase";

interface Props {
  portableText: any
  name: string
}

export const Accordion = ({ portableText, name }: Props) => {

  return (
    <AccordionBase name={name} portableText={portableText} />
  )
}