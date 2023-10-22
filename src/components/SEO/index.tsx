import React from 'react'


interface SEOProps {
    title?: string;
}


export const SEO = ({ title = "Sxgitario" }: SEOProps) => {
    // const site = useSiteMetadata();
    // console.log("site: ", site);
    return (
        <>
            <title>{title}</title>
            <meta name="description" content="Una bitácora digital con algunos escritos que ido redactando al pasar de los años. En ellos, comparto algunas experiencias, sueños, y formas de ver la vida. <<Después de la verdad nada hay tan bello como la ficción>> A. Machado."/>
        </>
    )
}
