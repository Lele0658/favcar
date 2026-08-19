import Header from '../components/Header';

export default function Models() {
  const models = [
    { name: 'Phantom', engine: '6.75L V12', hp: '563 hp', drive: 'RWD', desc: 'The pinnacle of Rolls‑Royce. A full-size luxury sedan that defines ultimate status.', price: '~$460,000+' },
    { name: 'Ghost', engine: '6.75L V12', hp: '563 hp', drive: 'AWD', desc: 'Minimalist, modern, and agile. A slightly smaller masterpiece targeting younger connoisseurs.', price: '~$350,000+' },
    { name: 'Cullinan', engine: '6.75L V12', hp: '563 hp', drive: 'AWD', desc: 'The most luxurious SUV ever built. Practicality meets off-road capability with supreme comfort.', price: '~$370,000+' },
    { name: 'Spectre (EV)', engine: 'Dual-Motor', hp: '~577 hp', drive: 'AWD', desc: 'The first fully electric Rolls‑Royce. Signal of the brand\'s future, combining silent power with modern luxury.', price: '~$420,000+' },
    { name: 'Wraith', engine: '6.6L V12', hp: '624 hp', drive: 'RWD', desc: 'High-performance coupé. The fastest and most powerful Rolls‑Royce ever built.', price: '~$330,000 (when new)', discontinued: true },
    { name: 'Dawn', engine: '6.6L V12', hp: '563 hp', drive: 'RWD', desc: 'Elegant open-top convertible. The embodiment of leisurely, sophisticated driving.', price: '~$350,000 (when new)', discontinued: true },
  ];

  const specRows = [
    { feature: 'Body Style', Phantom: 'Full-size sedan', Ghost: 'Mid-size sedan', Cullinan: 'Super-luxury SUV', Spectre: 'Electric coupe', Wraith: '2-door coupé', Dawn: '2-door convertible' },
    { feature: '0–60 mph', Phantom: '~5.1 sec', Ghost: '~4.6 sec', Cullinan: '~4.9 sec', Spectre: '~4.4 sec', Wraith: '~4.4 sec', Dawn: '~4.9 sec' },
    { feature: 'Drive Type', Phantom: 'RWD', Ghost: 'AWD', Cullinan: 'AWD', Spectre: 'AWD', Wraith: 'RWD', Dawn: 'RWD' },
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">Rolls‑Royce Models</h1>
        <section>
          <h2 className="section-title">Our Model Lineup</h2>
          <div className="grid-2">
            {models.map((m, idx) => (
              <div key={idx} className="model-card">
                <h3>{m.name} {m.discontinued && <span className="discontinued">Discontinued</span>}</h3>
                <div className="model-specs">
                  <span>{m.engine}</span>
                  <span>{m.hp}</span>
                  <span>{m.drive}</span>
                </div>
                <p>{m.desc}</p>
                <div className="model-price">{m.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Detailed Specifications Comparison</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Phantom</th>
                  <th>Ghost</th>
                  <th>Cullinan</th>
                  <th>Spectre</th>
                  <th>Wraith</th>
                  <th>Dawn</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.feature}</strong></td>
                    <td>{row.Phantom}</td>
                    <td>{row.Ghost}</td>
                    <td>{row.Cullinan}</td>
                    <td>{row.Spectre}</td>
                    <td>{row.Wraith}</td>
                    <td>{row.Dawn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}