import React from "react";
import Cards from "../../components/Card/cours";
import Cellars from "../../components/Card/cellars";
import Meteo from "../../components/Card/meteo";
import Calendar from "../../components/Calendar";
import Actualites from "../../components/Card/actualites";
import JobList from "../../components/Table/hjob";
import Reste from "../../components/Table/reste.js";
import Histroique from "../../components/Card/histroique.js";
import Parentillustration from "../../assets/images/Parentillustration@2x.png";
import bell from "../../assets/images/bell@2x.png";
import envelope1 from "../../assets/images/envelope1.png";
import User from "../../assets/images/User.png";
import Messenger from "../../assets/images/Messenger-1.png";
import Groupe351 from "../../assets/images/Groupe351@2x.png";
import Groupe from "../../assets/images/Groupe-74@2x.png";
import Groupe152 from "../../assets/images/Groupe152@2x.png";
import Groupe172 from "../../assets/images/Groupe172@2x.png";
import Groupe196 from "../../assets/images/Groupe196@2x.png";
import Groupedemasques2 from "../../assets/images/Groupedemasques2@2x.png";
import Groupedemasques3 from "../../assets/images/Groupedemasques3@2x.png";
import Groupedemasques4 from "../../assets/images/Groupedemasques4@2x.png";
import Groupe356 from "../../assets/images/Groupe356@2x.png";

import Groupe213 from "../../assets/images/Groupe213@2x.png";
import Image20 from "../../assets/images/Image20@2x.png";
import Image21 from "../../assets/images/Image21@2x.png";
import { Link } from "react-router-dom";

const VieScolaire = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-lg-9 border-end border-1 border-secondary border-opacity-25">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-7">
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <div className="family-heading-box mb-3 mb-sm-0">
                  <h3 className="text-dark fw-bold mb-1">
                    Bon retour Anissa !
                  </h3>
                  <p className="text-dark fw-light mb-2">
                    <span className="bell-icons me-1">
                      <img src={bell} alt="icon" />
                    </span>{" "}
                    Vous avez 4 nouveaux messaging{" "}
                  </p>
                  <p className="text-dark fw-light">
                    <span className="bell-icons me-1">
                      <img src={envelope1} alt="icon" />
                    </span>{" "}
                    et 10 nouvelles notifications
                  </p>
                </div>
                <div className="family-box ms-3">
                  <img src={Parentillustration} alt="pimg" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column flex-sm-row justify-content-end faq-btns">
                <Link
                  to="/"
                  className="d-inline-block text-white py-2 px-3 rounded-pill text-center mb-2 mb-sm-0 me-sm-3"
                >
                  <span className="icon-faq">
                    <img src={User} alt="icon" />
                  </span>
                  FAQ
                </Link>

                <Link
                  to="/"
                  className="d-inline-block text-white py-2 px-3 rounded-pill text-center"
                >
                  <span className="icon-faq ">
                    <img src={Messenger} alt="icon" />
                  </span>
                  Centre D'aide
                </Link>
              </div>
            </div>
          </div>
          <div className="number-images d-block my-4">
            <div className="row">
              <Cards number="3" title="Cours en ligne" imgsrc={Groupe} />
              <Cards number="5" title="Devoir à la maison" imgsrc={Groupe152} />
              <Cards number="4" title="Support de cours" imgsrc={Groupe172} />
              <Cards number="21" title="MOOCse" imgsrc={Groupe196} />
            </div>
          </div>

          <JobList />

          <div className="table-food d-block mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="d-block bg-white rounded-3 p-4 mb-4">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="img-book me-2">
                          <img src={Groupe351} alt="pimg" />
                        </div>
                        <h2 className="table-heaing">
                          Cantine ( Menu du jour )
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select className="today-select float-end">
                        <option value>Aujourd'hui</option>
                        <option value>Aujourd'hui</option>
                        <option value>Aujourd'hui</option>
                        <option value>Aujourd'hui</option>
                        <option value>Aujourd'hui</option>
                      </select>
                    </div>
                    <Cellars
                      title="Blanquette de saumon"
                      imgsrc={Groupedemasques2}
                    />
                    <Cellars
                      title="Boulettes Bœuf haché"
                      imgsrc={Groupedemasques3}
                    />
                    <Cellars title="Crème caramel" imgsrc={Groupedemasques4} />
                  </div>
                </div>
                <div className="table-today d-block bg-white rounded-3 p-4">
                  <div className="row gy-4">
                    <div className="col-12">
                      <div className="d-flex align-items-center">
                        <div className="img-book me-2">
                          <img src={Groupe356} alt="pimg" />
                        </div>
                        <h2 className="table-heaing">Reste à payer</h2>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="table-responsive">
                        <Reste />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Histroique />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-3">
          <div className="calander-box d-block w-100 mb-3">
            {/* <img src={Cal} alt="pimg" style={{ width: "100%" }} /> */}
            <Calendar selectRange />
          </div>
          <Meteo />
          <div className="d-block bg-white rounded-3 p-3">
            <div className="d-flex align-items-center mb-2">
              <div className="img-book me-2">
                <img src={Groupe213} alt="pimg" />
              </div>
              <h2 className="table-heaing">Actualités</h2>
            </div>
            <Actualites
              imgsrc={Image20}
              title="Class Building"
              membres="123 Membres"
            />
            <Actualites
              imgsrc={Image21}
              title="Work online"
              membres="23 Membres"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default VieScolaire;
