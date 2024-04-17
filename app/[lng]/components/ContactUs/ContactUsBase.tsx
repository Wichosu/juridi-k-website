import { TFunction } from "i18next";

interface Props {
  t: TFunction
  lng: string
}

export const ContactUsBase = ({ t, lng }: Props) => {
  return (
    <div className="bg-darkblue grid gap-4 px-8 py-4">
      <h1 className="text-white text-3xl">Contactanos</h1>
      <textarea className="h-auto" rows={1} cols={10}></textarea>
      <input className="" placeholder="nombre" />
      <input className="" placeholder="email" />
      <input className="" placeholder="telefono" />
      <input className="" placeholder="mensaje" />
      <button className="w-fit bg-darkred text-white px-4 py-2">Enviar</button>
    </div>
  )
}