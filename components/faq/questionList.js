import QuestionItem from "./questionItem";
import Questions from "./Questions";

export default function QuestionList() {
  return (
    <div class="bg-black border border-gray-900 divide-y divide-gray-900 rounded-xl w-full">
      {Questions.map((q) => {
        return <QuestionItem question={q.question} answer={q.answer} />;
      })}
    </div>
  );
}
