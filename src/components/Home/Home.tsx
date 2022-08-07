import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from "react-router-dom";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="card card-home">
        <div className="intro">
          <div className="intro-title">
            <h1>
              <div className="intro-title__sub">LEGO Biotech</div>
              насіння КУКУРУДЗИ та гібридів РІПАКУ
            </h1>
            <div className="link-catalog">
              <Link to="catalog">
                <ArrowRightAltIcon color="primary" sx={{ fontSize: 50 }}/>
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
        </div>
      </div>
    </div>
  )
}
export default Catalog
