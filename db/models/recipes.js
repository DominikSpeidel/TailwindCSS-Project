import mongoose from "mongoose";

const { Schema } = mongoose;

const recipesSchema = new Schema({
  name: String,
  duration: Number,
  imageUrl: String,
  user: String,
});

const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipesSchema);

export default Recipe;
