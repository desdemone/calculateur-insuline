function RatiosCard({ ratioMatin, ratioMidi, ratioSoir }) {
  return (
    <div className="card">
      <h2 className="subtitle">Vos ratios</h2>

      <div className="ratios-grid">
        <span className="ratio-label">Matin</span>
        <span>{ratioMatin} U / 10 g</span>

        <span className="ratio-label">Midi</span>
        <span>{ratioMidi} U / 10 g</span>

        <span className="ratio-label">Soir</span>
        <span>{ratioSoir} U / 10 g</span>
      </div>
    </div>
  );
}

export default RatiosCard;
