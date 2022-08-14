import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from "react-router-dom";
import Carousel from "./Carousel";

const Catalog = () => {
  return (
    <div className="home">
      <div className="card card-home">
        <div className="header">
          <div className="phone">
            <a href="tel:+380932198630" className="href">+380 93 219 8630</a>
          </div>
        </div>
        <div className="home-content">
          <div className="intro">
            <div className="intro-title">
              <h1>
                <div className="intro-title__sub">LEGO Biotech</div>
                насіння КУКУРУДЗИ та гібридів РІПАКУ
              </h1>
              <div className="link-catalog">
                <Link to="catalog">
                  до каталогу <ArrowRightAltIcon color="secondary" sx={{ fontSize: 50 }}/>
                </Link>
              </div>
            </div>
            <div className="intro-quote">
              <q>
                Лєго Біотех – компанія заснована канадцямиукраїнського походження. Канада - країна каноли. В скрутний для України момент насіння каноликращої генетики пропонується для професійноговирощування. Генетика Лєго Біотех ввібрала всебе німецьке коріння українську працелюбністьта канадську наукоємність і технологічність.
                Гібриди каноли  Лєго це поєднання високоїурожайності, стресостійкості та генетичнихсистем захисту. Професійне вирощування –це використання найсучасніших підходів ірозробок не стільки в сфері хімічного захисту,а в першу чергу використання сучаснихбіотехнологічних підходів.
                <br/><b>Відкрийте для себе майбутнє!</b>
              </q>
              <br/><br/>Генеральний директор Лєго Біотех
              <br/><br/><b>Ульріх Барнс</b>
            </div>
          </div>
          <div className="product-slider">
            <Carousel />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Catalog
