import Question from "../models/Question.js";
import Submission from "../models/Submission.js";

export const getExamQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]);

    res.json({
      questions,
      duration: 1800, 
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};

export const submitExam = async (req, res) => {
  try {
    const { answers } = req.body; 
    let score = 0;

    for (let ans of answers) {
      const q = await Question.findById(ans.questionId);
      if (q && q.correctOption === ans.selectedOption) {
        score++;
      }
    }

    const submission = new Submission({
      userId: req.user.userId,
      answers,
      score,
    });

    await submission.save();

    res.json({
      message: "Exam submitted successfully",
      score,
      total: answers.length, 
    });
  } catch (error) {
    res.status(500).json({ message: "Error submitting exam" });
  }
};
