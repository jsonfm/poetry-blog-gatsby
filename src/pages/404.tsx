import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Header } from "../layout/default/Header"
import { SEO } from "../components/SEO"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header/>
        <section className="h-screen">
          <div className="container flex flex-col items-center justify-center h-[65vh]">
            <h4 className="text-xl">No se encontró</h4>
            <Link to="/" className="underline">
              Volver
            </Link>
          </div>
        </section>
    </>

  )
}

export default NotFoundPage;


export const Head = () => {
  return (
      <SEO />
  )
}
