import React from "react";
import familyPhoto from "../../assets/images/Parentillustration@2x.png";
import bell from "../../assets/images/bell@2x.png";
import envelope1 from "../../assets/images/envelope1.png";
import { Link } from "react-router-dom";
import User from "../../assets/images/User.png";
import Messenger from "../../assets/images/Messenger-1.png";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Groupe from "../../assets/images/Groupe-74@2x.png";
import Groupe152 from "../../assets/images/Groupe152@2x.png";
import Groupe172 from "../../assets/images/Groupe172@2x.png";
import Groupe196 from "../../assets/images/Groupe196@2x.png";
import BasicTable from "../../Components/Table";
import book from "../../assets/images/ico@2x.png";

export const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="p-2 col-md-9">
        <div className="container px-2">
          {/* ligne 1*/}
          <div className=" row gx-5 d-flex justify-content-between  mb-3">
            <div className=" col-md-7">
              <div>
                <div className="d-flex row">
                  <div className="p-2  col-lg-5 ">
                    <div className="mb-2 text-dark fw-bold">
                      {" "}
                      <h3>
                        {" "}
                        <strong>Bon retour Anissa!</strong>
                      </h3>
                    </div>
                    <p className="fontstyle">
                      <span className="bell-icons me-3">
                        <img src={envelope1} alt="envelope1" />
                      </span>
                      Vous avez 4 nouveaux messaging
                    </p>
                    <p className="fontstyle">
                      <span className="bell-icons me-3">
                        <img src={bell} alt="bell" />
                      </span>
                      et 10 nouvelles notifications
                    </p>
                  </div>
                  <div className="p-2   col-lg-4">
                    <img
                      src={familyPhoto}
                      alt="familyPhoto"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" col-md-5 d-flex flex-row justify-content-end"
              style={{ alignItems: "center" }}
            >
              <div className="p-2  inline-block d-flex flex-row ">
                <Link
                  to={"#"}
                  className="text-white font-btn text-center font-btn text-decoration-none"
                >
                  <span className="me-2 ">
                    {" "}
                    <img src={User} alt="icon" />
                  </span>
                  FAQ
                </Link>
              </div>
              <div className="p-2  centre-aide d-flex flex-row ">
                <Link
                  to={"#"}
                  className="text-white text-center font-btn text-decoration-none"
                >
                  <span className="me-2">
                    {" "}
                    <img src={Messenger} alt="icon" />
                  </span>
                  Centre D'aide
                </Link>
              </div>
            </div>
          </div>

          {/* ligne 2 */}

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper className="paperStyle" elevation={3}>
                <div className="number-style">3</div>
                <div className="title-style">Cours en ligne</div>
                <div className="card-dasboard img-fluid">
                  <img src={Groupe} alt="text" />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="paperStyle" elevation={3}>
                <div className="number-style">5</div>
                <div className="title-style">Devoir à la maison</div>
                <div className="card-dasboard img-fluid">
                  <img src={Groupe152} alt="text" />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="paperStyle" elevation={3}>
                <div className="number-style">4</div>
                <div className="title-style">Support de cours</div>
                <div className="card-dasboard img-fluid">
                  <img src={Groupe172} alt="text" />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="paperStyle" elevation={3}>
                <div className="number-style">21</div>
                <div className="title-style">MOOCse</div>
                <div className="card-dasboard img-fluid">
                  <img src={Groupe196} alt="text" />
                </div>
              </Paper>
            </Grid>
          </Grid>

          {/* ligne 3 */}

          <div className="mt-5">
            <div className="d-flex flex-column d-block bg-white">
              <div className="d-flex flex-row justify-content-between">
                <div className=" m-3">
                  <div className="d-flex flex-row">
                    <div className="p-1 ">
                      <img
                        src={book}
                        alt="timetable"
                        className="img-fluid"
                        style={{ width: "27px" }}
                      />
                    </div>
                    <div className="p-1">
                      {" "}
                      <h5>
                        <strong>Emploi du temps</strong>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="m-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>Aujourd'hui</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="m-3">
                <BasicTable />
              </div>
            </div>
          </div>

          {/* ligne 4 */}
          <div className="d-flex flex-row">
            <div className="col-md-6 me-5">
              <div className=" mt-5 d-block bg-white">
                <div className="d-flex flex-row">
                  <div className="p-2 col-md-4">bbbbbb</div>
                  <div className="p-2 col-md-4">ttttttttt</div>
                  <div className="p-2 col-md-4">wwwwwwwwwww</div>
                </div>
                {/* <div className="card">
  <div className="card-img-top">
    <img src="Groupe196" alt=""/>

  </div>
  <div className="card-body">
    <p className="card-text"> A well-known quote, contained in a blockquote element.</p>

  </div>

</div> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className=" mt-5 d-block bg-white">cercle</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 col-md-3 d-flex flex-row">calendar</div>
    </div>
  );
};
