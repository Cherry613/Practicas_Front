import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Data = {
    quote: string,
}

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
   
    const url = `https://learnyourlesson.deno.dev/`;
    try{
       const response = await axios.get<Data>(url); 
       if(response.data == null){
            throw new Response("Error", {status: 404});
       }

       return ctx.render(response.data)

    }catch(error){
        console.error(error);
        throw new Response("Error");
    }
  }
}

export default function Home( props: PageProps<Data>) {

  return (
    <body>
      <div class ="flex-indice">
        <h1 class="morado"> ✨Iluminame✨ </h1>
        <button class= "arcoiris">Dilo reina</button>
        <p class= "quote-random rotar-texto">{props.data}<br></br></p>
        <button class ="imagen">Pulsame!</button>
      </div>
      <div class ="flex-indice2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lKONCrvib-g?si=57G-x3i5JeVo9dKZ&amp;start=3"
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>

        <image src= "https://i.gifer.com/6mp.gif" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/96NUsT-1k2A?si=X4MEWXhlEAt9vvwS&amp;start=8" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      
    </body>
    
  );
}
