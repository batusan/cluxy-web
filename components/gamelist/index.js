import Footer from "../landing/footer";
import Banner from "../shared/Banner";
import Background from "../shared/bg";
import Header from "../shared/header";
import Table from "./table";

export default function Gamelist() {
  return (
    <div>
      <Header />
      <Banner
        title={"Game List"}
        description={"Supported games are listed here!"}
      />
      <div className="px-4">
        <Table />
      </div>
      <Footer />
      <Background />
    </div>
  );
}
