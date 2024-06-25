import { TFunction } from "i18next";
import { Accordion } from "../Accordion/client";

interface Props {
  t: TFunction,
  lng: string
}

export const InfoBase = ({ t, lng}: Props) => {
  return (
    <section>
      <div className="px-8 my-4 lg:max-w-screen-xl lg:mx-auto">
        <Accordion lng={lng} locale="info" name={ t("justification") }>
          JURIDI-K nace a partir de la idea de un grupo de abogados de amplia experiencia
que son conscientes de la necesidad de prepararse académicamente para
desarrollarse en una rama específica del Derecho para brindar un servicio de
calidad a todo aquel que requiera de consultoría y asesoría jurídica. 
        </Accordion>
        <Accordion lng={lng} locale="info" name={ t("mision") }>
          JURIDI-K nace a partir de la idea de un grupo de abogados de amplia experiencia
que son conscientes de la necesidad de prepararse académicamente para
desarrollarse en una rama específica del Derecho para brindar un servicio de
calidad a todo aquel que requiera de consultoría y asesoría jurídica. 
        </Accordion>
        <Accordion lng={lng} locale="info" name={ t("vision") }>
          JURIDI-K nace a partir de la idea de un grupo de abogados de amplia experiencia
que son conscientes de la necesidad de prepararse académicamente para
desarrollarse en una rama específica del Derecho para brindar un servicio de
        </Accordion>
        <Accordion lng={lng} locale="info" name={ t("values") }>
          JURIDI-K nace a partir de la idea de un grupo de abogados de amplia experiencia
que son conscientes de la necesidad de prepararse académicamente para
desarrollarse en una rama específica del Derecho para brindar un servicio de
        </Accordion>
      </div>
    </section>
  )
}