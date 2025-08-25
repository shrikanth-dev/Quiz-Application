import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

const seedQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Question.deleteMany(); 

    await Question.insertMany([
      {
        question: "What is React?",
        options: ["Framework", "Library", "Language", "Tool"],
        correctOption: 1,
      },
      {
        question: "Which hook is used for state management?",
        options: ["useState", "useEffect", "useMemo", "useRef"],
        correctOption: 0,
      },
      {
        question: "What does MongoDB store data as?",
        options: ["Tables", "Rows", "JSON-like documents", "Arrays"],
        correctOption: 2,
      },
      {
        question: "Which keyword is used to declare a constant in JS?",
        options: ["var", "let", "const", "static"],
        correctOption: 2,
      },
      {
        question: "Which protocol is used by REST APIs?",
        options: ["SMTP", "HTTP", "FTP", "SSH"],
        correctOption: 1,
      }
    ]);

    console.log("Questions seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedQuestions();
