import { text } from "stream/consumers";
import { comments } from "./data";
import { headers } from "next/headers";

export async function GET(){
    return Response.json(comments);
}
export async function POST(req : Request){
    const comment = await req.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment),
{
    headers: {
        "Content-Type": "application/jso"
    },
    status:201
})
}