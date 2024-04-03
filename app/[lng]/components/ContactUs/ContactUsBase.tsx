import { TFunction } from "i18next";

interface Props {
  t: TFunction
  lng: string
}

export const ContactUsBase = ({ t, lng }: Props) => {
  return (
    <>
      hello there
    </>
  )
}