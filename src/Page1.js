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

  const handlePositiveChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setter(value);
    }
  };

  return (
    <div className="App">
      <Header
        title="Mon outil de calcul de dose d’insuline"
        subtitle="Paramètres personnels"
      />

      <div className="medical-disclaimer">
        <div>
          <p className="medical-disclaimer-title">
            Avertissement important
          </p>
          <p>
            Cet outil est fourni à titre informatif uniquement.
            Il ne remplace pas l’avis d’un professionnel de santé.
          </p>
        </div>
      </div>

      <div className="section">

        <div className="card">
          <div className="field">
            <label>Sensibilité (mg/dl / U)</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={sensitivity}
              onChange={handlePositiveChange(setSensitivity)}
            />
          </div>

          <div className="field">
            <label>Glycémie actuelle</label>
            <input
              type="number"
              min="40"
              max="500"
              value={glycemia}
              onChange={handlePositiveChange(setGlycemia)}
            />
          </div>

          <div className="field">
            <label>Objectif glycémique</label>
            <input
              type="number"
              min="0"
              value={glucoseTarget}
              onChange={handlePositiveChange(setGlucoseTarget)}
            />
          </div>

          <div className="field">
            <label>Glycémie minimale</label>
            <input
              type="number"
              min="0"
              value={glucoseMin}
              onChange={handlePositiveChange(setGlucoseMin)}
            />
          </div>

          <div className="field">
            <label>Glycémie maximale</label>
            <input
              type="number"
              min="0"
              value={glucoseMax}
              onChange={handlePositiveChange(setGlucoseMax)}
            />
          </div>
        </div>

        <div className="card">
          <h2 className="subtitle">Insuline</h2>

          <div className="field">
            <label>Insuline active</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={activeInsulin}
              onChange={handlePositiveChange(setActiveInsulin)}
            />
          </div>
        </div>

        <div className="card">
          <h2 className="subtitle">Ratios</h2>

          <div className="field">
            <label>Matin</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={ratioMatin}
              onChange={handlePositiveChange(setRatioMatin)}
            />
          </div>

          <div className="field">
            <label>Midi</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={ratioMidi}
              onChange={handlePositiveChange(setRatioMidi)}
            />
          </div>

          <div className="field">
            <label>Soir</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={ratioSoir}
              onChange={handlePositiveChange(setRatioSoir)}
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
