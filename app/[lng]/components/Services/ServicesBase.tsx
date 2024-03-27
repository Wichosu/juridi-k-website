import { TFunction } from "i18next";

interface Props {
  t: TFunction<any, undefined>,
  lng: string
}

export const ServicesBase = ({ t, lng }) => {
  return (
    <section>
      <h1>Que Hacemos</h1>

    </section>
  )
}