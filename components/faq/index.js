import Footer from "../landing/footer";
import Banner from "../shared/Banner";
import Background from "../shared/bg";
import Header from "../shared/header";
import QuestionList from "./questionList";

export default function FaqPage() {
  return (
    <div>
      <Header />
      <Banner
        title={"FAQ"}
        description={
          "Some of the first few Questions that come to your mind. We’ve already got an answer for them!"
        }
      />
      <div className="flex w-full h-full lg:px-64 z-50 relative">
        <QuestionList />
      </div>
      <Footer />
      <Background />
    </div>
  );
}
