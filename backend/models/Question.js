import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }], 
  correctOption: { type: Number, required: true } 
});

export default mongoose.model("Question", questionSchema);
