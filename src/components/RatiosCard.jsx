function RatiosCard({ ratioMatin, ratioMidi, ratioSoir }) {
  return (
    <div className="card">
      <h2 className="subtitle">Vos ratios</h2>

      <p style={{ marginLeft: "40px" }}>
        Matin : {ratioMatin} U / 10 g
      </p>
      <p style={{ marginLeft: "40px" }}>
        Midi : {ratioMidi} U / 10 g
      </p>
      <p style={{ marginLeft: "40px" }}>
        Soir : {ratioSoir} U / 10 g
      </p>
    </div>
  );
}

export default RatiosCard;
