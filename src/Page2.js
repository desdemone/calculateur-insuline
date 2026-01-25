import { Link } from "react-router-dom";
import { useState } from "react";
import RatiosCard from "./components/RatiosCard";
import "./App.css";

function Page2({
  sensitivity,
  glucoseTarget,
  glucoseMax,
  glucoseMin,
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

  /* ===== Calcul glucides ===== */
  const carbsTotal =
    carbs100g && quantity
      ? (Number(carbs100g) * Number(quantity)) / 100
      : null;

  /* ===== Sélection du ratio ===== */
  let ratioSelected = 0;
  if (moment === "matin") ratioSelected = ratioMatin;
  if (moment === "midi") ratioSelected = ratioMidi;
  if (moment === "soir") ratioSelected = ratioSoir;

  /* ===== Dose repas ===== */
  const insulinMealDose =
    carbsTotal !== null && ratioSelected > 0
      ? (carbsTotal * ratioSelected) / 10
      : null;

  /* ===== Correction glycémique ===== */
  const correctionDose =
    glycemia > glucoseTarget && sensitivity > 0
      ? Math.max(
          Math.min(
            (glycemia - glucoseTarget) / sensitivity - activeInsulin,
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

        {/* 📊 Ratios */}
        <RatiosCard
          ratioMatin={ratioMatin}
          ratioMidi={ratioMidi}
          ratioSoir={ratioSoir}
        />

        {/* 🩸 Glycémie */}
        <div className="card">
          <h2 className="subtitle">Glycémie actuelle</h2>
          <p style={{ fontSize: "20px", textAlign: "center" }}>
            <strong>{glycemia} mg/dl</strong>
          </p>
        </div>

        {/* 💉 Insuline active */}
        <div className="card">
          <h2 className="subtitle">Insuline active</h2>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            <strong>{activeInsulin} U</strong>
          </p>
        </div>

        {/* 🍽️ Calcul glucides */}
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
            <div className="input-unit">
              <input
                type="number"
                value={carbs100g}
                onChange={(e) => setCarbs100g(e.target.value)}
              />
              <span className="unit">g</span>
            </div>
          </div>

          <div className="field">
            <label>Quantité consommée</label>
            <div className="input-unit">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <span className="unit">g</span>
            </div>
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

        {/* 🧮 Résumé */}
        {roundedTotalDose !== null && (
          <div className="card">
            <h2 className="subtitle">Résumé du calcul</h2>

            <p>
              Dose repas :
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
              👉 Dose totale recommandée :
              <strong> {roundedTotalDose} U</strong>
            </p>
          </div>
        )}

        {/* 🔙 Retour */}
        <Link to="/">
          <button>Retour aux paramètres</button>
        </Link>

      </div>
    </div>
  );
}

export default Page2;
