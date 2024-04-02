import { TFunction } from "i18next";
import { Accordion } from "../Accordion/client";

interface Props {
  t: TFunction,
  lng: string
}

export const InfoBase = ({ t, lng}: Props) => {
  return (
    <section className="px-8">
      <Accordion lng={lng} locale="info" name="Justificacion">
        example
      </Accordion>
    </section>
  )
}