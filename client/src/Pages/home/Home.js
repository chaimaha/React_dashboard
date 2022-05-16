import "./home.css";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Courbe from "../../Components/Courbe/Courbe";

export default function Home() {
  return (
    <main>
      <div className="helper">
        <div className="home">
          <FeaturedInfo />
          <Courbe />

          <div className="homeWidgets"></div>
        </div>
      </div>
    </main>
  );
}
