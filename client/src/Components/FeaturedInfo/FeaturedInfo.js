import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">vente d'avant hier</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">89669DT</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon negative" />
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">vente d'hier</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">48159DT</span>
          <span className="featuredMoneyRate">
            <ArrowDownward className="featuredIcon" />
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">vente d'aujourd'hui</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2225DT</span>
          <span className="featuredMoneyRate">
            <ArrowDownward className="featuredIcon" />
          </span>
        </div>
      </div>
    </div>
  );
}
