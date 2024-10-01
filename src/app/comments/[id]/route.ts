import { type NextRequest } from "next/server";
import { comments } from "../data"
import { redirect } from "next/navigation";

export async function GET(_req : Request, {params}: {params :{id: string}}){
  if(parseInt(params.id) > comments.length){
    redirect("/comments")
  }
    const comment = comments.find((c)=> c.id === parseInt(params.id))
    return Response.json(comment);
}
// export async function GET(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get("query");
//     const filteredComments = query
//       ? comments.filter((comment) => comment.text.includes(query))
//       : comments;
//     return Response.json(filteredComments);
//   }

export async function PATCH(req : Request, {params}: {params :{id: string}}){
    const body = await req.json();
    const {text}= body;

    const index = comments.findIndex((c)=> c.id === parseInt(params.id));
    comments[index].text = text;
    return Response.json(comments[index])
}

export async function DELETE(_req : Request, {params}: {params :{id: string}}){
    const index = comments.findIndex((c)=> c.id === parseInt(params.id));
    const deleteComment = comments[index];
    comments.splice(index,1);
    return Response.json(deleteComment)
}

// export async function GET(req : NextRequest){
//     const serachParams = req.nextUrl.searchParams;
//     const query = serachParams.get("query");
//     const filteredComments = query? comments.filter((c)=> c.text.includes(query)) :
//     comments;
//     return Response.json(filteredComments);
// }
