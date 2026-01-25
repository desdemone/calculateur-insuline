import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function Page1({
  sensitivity, setSensitivity,
  glucoseTarget, setGlucoseTarget,
  glucoseMax, setGlucoseMax,
  glucoseMin, setGlucoseMin,
  ratioMatin, setRatioMatin,
  ratioMidi, setRatioMidi,
  ratioSoir, setRatioSoir,
  activeInsulin, setActiveInsulin,
  glycemia, setGlycemia,
}) {
  return (
    <div className="App">
      <Header
        title="Mon outil de calcul de dose d’insuline"
        subtitle="Paramètres personnels"
      />

      <div className="section">

        <div className="card">
          <div className="field">
            <label>Sensibilité (mg/dl / U)</label>
            <input
              type="number"
              value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
            />
          </div>
<div className="field">
  <label>Glycémie actuelle</label>
  <div className="input-unit">
    <input
      type="number"
      min="40"
      max="500"
      value={glycemia}
      onChange={(e) => setGlycemia(Number(e.target.value))}
    />
    <span className="unit">mg/dl</span>
  </div>
</div>

          <div className="field">
            <label>Objectif glycémique</label>
            <input
              type="number"
              value={glucoseTarget}
              onChange={(e) => setGlucoseTarget(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Glycémie minimale</label>
            <input
              type="number"
              value={glucoseMin}
              onChange={(e) => setGlucoseMin(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Glycémie maximale</label>
            <input
              type="number"
              value={glucoseMax}
              onChange={(e) => setGlucoseMax(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="card">
          <h2 className="subtitle">Insuline</h2>

          <div className="field">
            <label>Insuline active </label>
            <input
              type="number"
              step="0.1"
              value={activeInsulin}
              onChange={(e) => setActiveInsulin(Number(e.target.value))}
            />
          </div>

         
        </div>

        <div className="card">
          <h2 className="subtitle">Ratios</h2>

          <div className="field">
            <label>Matin</label>
            <input
              type="number"
              step="0.1"
              value={ratioMatin}
              onChange={(e) => setRatioMatin(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Midi</label>
            <input
              type="number"
              step="0.1"
              value={ratioMidi}
              onChange={(e) => setRatioMidi(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Soir</label>
            <input
              type="number"
              step="0.1"
              value={ratioSoir}
              onChange={(e) => setRatioSoir(Number(e.target.value))}
            />
          </div>
        </div>

        <Link to="/page2">
          <button>Accéder au calcul</button>
        </Link>

      </div>
    </div>
  );
}

export default Page1;
