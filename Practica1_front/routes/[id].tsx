import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Data = {
    quote: string,
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params;

        const url = `https://learnyourlesson.deno.dev/${id}`;
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


const Page = (props: PageProps<Data>) => {
    return (
        <body class="quote">
            <div class= "flex-disco">
                <image src= "https://i.gifer.com/XVny.gif" />
                <image src= "https://img1.picmix.com/output/stamp/normal/5/9/1/9/2409195_bac5b.gif" class="centrado-imagen"></image>
                <image src= "https://i.gifer.com/XVny.gif" />
            </div>
            
            <div class = "centrado-quote rotar-texto">
                <p class="morado">{props.data}</p>
            </div>            
        </body>
    )
}

export default Page;