import Recipe from "../../../../db/models/recipes";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(recipe);
  }

  if (request.method === "PUT") {
    const updatedRecipe = request.body;
    await Recipe.findByIdAndUpdate(id, updatedRecipe);
    response.status(200).json({ status: "Recipe updated!" });
    return;
  }

  if (request.method === "DELETE") {
    await Recipe.findByIdAndDelete(id);
    response.status(200).json({ status: "Recipe deleted!" });
  }
}
