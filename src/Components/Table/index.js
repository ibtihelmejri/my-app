import * as React from "react";

import Groupe334 from "../../assets/images/Groupe334@2x.png";
import Groupe336 from "../../assets/images/Groupe336@2x.png";
import Groupe340 from "../../assets/images/Groupe340@2x.png";
import Groupe338 from "../../assets/images/Groupe338@2x.png";
import { textAlign } from "@mui/system";

export default function BasicTable() {
  return (
    <table
      class="table table-responsive table-lg table-striped table-hover"
      style={{ marginBottom: "1px" }}
    >
      <thead>
        <tr className="text-secondary">
          <th scope="col" >Matières</th>
          <th scope="col">Professeur</th>
          <th scope="col">Salle</th>
          <th scope="col">Heure</th>
          <th scope="col">Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex flex-row ">
              <div className="p-2">
                {" "}
                <img
                  src={Groupe338}
                  alt="book"
                  className="img-fluid"
                  style={{ width: "25px" }}
                ></img>
              </div>
              <div className="p-2">
                {" "}
                <p>Mathématique</p>
              </div>
            </div>
          </td>
          <td>
            <div className="p-2">Nicolas Pasteur</div>
          </td>
          <td>
            <div className="p-2">C21</div>
          </td>
          <td>
            <div className="p-2">8h00-10h00</div>
          </td>
          <td>
            <div className="p-2">
              <span className="badge bg-success"> Terminé</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex  ">
              <div className="p-2">
                {" "}
                <img
                  src={Groupe334}
                  alt="book"
                  className="img-fluid"
                  style={{ width: "25px" }}
                ></img>
              </div>
              <div className="p-2">
                {" "}
                <p>Physique</p>
              </div>
            </div>
          </td>
          <td>Yoshio Payne</td>
          <td>Lab4</td>
          <td>10h00 - 12h00</td>
          <td>
            <span className="badge bg-warning"> En cours</span>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex flex-row ">
              <div className="p-2">
                {" "}
                <img
                  src={Groupe336}
                  alt="book"
                  className="img-fluid"
                  style={{ width: "25px" }}
                ></img>
              </div>
              <div className="p-2">
                {" "}
                <p>Géographie</p>
              </div>
            </div>
          </td>
          <td>Yoshio Payne</td>
          <td>Lab3</td>
          <td>10h00 - 12h00</td>
          <td>
            <span className="badge bg-secondary" > Reporté</span>
          </td>
        </tr>

        <tr>
          <td>
            <div className="d-flex flex-row ">
              <div className="p-2">
                {" "}
                <img
                  src={Groupe340}
                  alt="book"
                  className="img-fluid"
                  style={{ width: "25px" }}
                ></img>
              </div>
              <div className="p-2">
                {" "}
                <p>Français</p>
              </div>
            </div>
          </td>
          <td>Yoshio Payne</td>
          <td>Lab3</td>
          <td>10h00 - 12h00</td>
          <td>
            <span className="badge bg-info"> A venir</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
