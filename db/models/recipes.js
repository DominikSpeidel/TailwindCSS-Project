import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  ingredients: [{ id: String, name: String }],
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  user: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
