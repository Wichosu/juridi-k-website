
import { Navbar } from "../Navbar/client";
import { Footer } from "../Footer/client";
import { ContactUs } from "../ContactUs/client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
  lng: string
}

export const Layout = ({ children, lng }: Props) => {
  return (
    <>
      <Navbar lng={lng} />
      <main>{children}</main>
      <ContactUs lng={lng} />
      <Footer lng={lng} />
    </>
  )
}