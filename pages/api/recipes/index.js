import dbConnect from "../../../db/connect";
import Recipe from "../../../db/models/recipes";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
