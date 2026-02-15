import { Link } from "react-router-dom";
import { useState } from "react";
import RatiosCard from "./components/RatiosCard";
import "./App.css";

function Page2({
  sensitivity,
  glucoseTarget,
  ratioMatin,
  ratioMidi,
  ratioSoir,
  glycemia,
  activeInsulin,
}) {

  /* ===== États locaux ===== */
  const [carbs100g, setCarbs100g] = useState("");
  const [quantity, setQuantity] = useState("");
  const [moment, setMoment] = useState("matin");

  /* ===== Protection valeurs positives ===== */
  const handlePositiveChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setter(value);
    }
  };

  /* ===== Calcul glucides ===== */
  const carbsTotal =
    carbs100g !== "" && quantity !== ""
      ? (Number(carbs100g) * Number(quantity)) / 100
      : null;

  /* ===== Sélection du ratio ===== */
  let ratioSelected = 0;
  if (moment === "matin") ratioSelected = ratioMatin;
  if (moment === "midi") ratioSelected = ratioMidi;
  if (moment === "soir") ratioSelected = ratioSoir;

  /* ===== Conversion sécurisée ===== */
  const numericSensitivity = Math.max(0, Number(sensitivity));
  const numericTarget = Math.max(0, Number(glucoseTarget));
  const numericGlycemia = Math.max(0, Number(glycemia));
  const numericActiveInsulin = Math.max(0, Number(activeInsulin));
  const numericRatio = Math.max(0, Number(ratioSelected));

  /* ===== Dose repas ===== */
  const insulinMealDose =
    carbsTotal !== null && numericRatio > 0
      ? (carbsTotal * numericRatio) / 10
      : null;

  /* ===== Correction glycémique ===== */
  const correctionDose =
    numericGlycemia > numericTarget && numericSensitivity > 0
      ? Math.max(
          Math.min(
            (numericGlycemia - numericTarget) /
              numericSensitivity -
              numericActiveInsulin,
            10
          ),
          0
        )
      : 0;

  /* ===== Total ===== */
  const totalDose =
    insulinMealDose !== null
      ? insulinMealDose + correctionDose
      : null;

  const roundedTotalDose =
    totalDose !== null
      ? Math.round(totalDose * 2) / 2
      : null;

  return (
    <div className="App">

      <header className="header">
        <h1 className="title">Calcul des doses</h1>
      </header>

      <div className="section">

        {/* 📊 RATIOS */}
        <RatiosCard
          ratioMatin={ratioMatin}
          ratioMidi={ratioMidi}
          ratioSoir={ratioSoir}
        />

        {/* 🩸 GLYCÉMIE ACTUELLE */}
        <div className="card">
          <h2 className="subtitle">Glycémie actuelle</h2>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            <strong>
              {glycemia !== "" ? `${glycemia} mg/dl` : "—"}
            </strong>
          </p>
        </div>

        {/* 💉 INSULINE ACTIVE */}
        <div className="card">
          <h2 className="subtitle">Insuline active</h2>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            <strong>
              {activeInsulin !== "" ? `${activeInsulin} U` : "—"}
            </strong>
          </p>
        </div>

        {/* 🍽️ CALCUL GLUCIDES */}
        <div className="card">
          <h2 className="subtitle">Calculateur de glucides</h2>

          <p className="source-link">
            Source :{" "}
            <a
              href="https://ciqual.anses.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Base de données CIQUAL
            </a>
          </p>

          <div className="field">
            <label>Glucides pour 100 g</label>
            <input
              type="number"
              min="0"
              value={carbs100g}
              onChange={handlePositiveChange(setCarbs100g)}
            />
          </div>

          <div className="field">
            <label>Quantité consommée</label>
            <input
              type="number"
              min="0"
              value={quantity}
              onChange={handlePositiveChange(setQuantity)}
            />
          </div>

          <div className="field">
            <label>Moment du repas</label>
            <select
              value={moment}
              onChange={(e) => setMoment(e.target.value)}
            >
              <option value="matin">Matin</option>
              <option value="midi">Midi</option>
              <option value="soir">Soir</option>
            </select>
          </div>

          {carbsTotal !== null && (
            <p style={{ marginTop: "12px" }}>
              Glucides consommés :
              <strong> {carbsTotal.toFixed(1)} g</strong>
            </p>
          )}
        </div>

        {/* ⚠️ AVERTISSEMENT */}
        {insulinMealDose !== null && (
  <div className="medical-disclaimer">
    <div className="medical-warning-header">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="warning-icon"
      >
        <path
          d="M12 9V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="17"
          r="1"
          fill="currentColor"
        />
        <path
          d="M10.29 3.86L1.82 18A2 2 0 003.55 21H20.45A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <span className="medical-disclaimer-title">
        Avertissement
      </span>
    </div>

    <p>
      Outil d’aide au calcul — ne remplace pas un avis médical.
      Toute décision thérapeutique doit être validée avec un professionnel de santé.
    </p>
  </div>
)}



        {/* 🧮 RÉSUMÉ */}
        {roundedTotalDose !== null && (
          <div className="card">
            <h2 className="subtitle">Résumé du calcul</h2>

            <p>
              Dose repas estimée :
              <strong> {insulinMealDose.toFixed(2)} U</strong>
            </p>

            {correctionDose > 0 && (
              <p>
                Correction glycémique :
                <strong> {correctionDose.toFixed(2)} U</strong>
              </p>
            )}

            <hr />

            <p style={{ fontSize: "22px", textAlign: "center" }}>
              👉 Estimation de la dose totale :
              <strong> {roundedTotalDose} U</strong>
            </p>
          </div>
        )}

        {/* 🔙 RETOUR */}
        <Link to="/">
          <button>Retour aux paramètres</button>
        </Link>

      </div>
    </div>
  );
}

export default Page2;
