import Header from '../components/Header';

export default function Services() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">Services &amp; Ownership</h1>
        <div className="grid-2">
          <div className="service-card">
            <h3>1. Bespoke Personalization</h3>
            <ul>
              <li><strong>Exterior:</strong> Custom paint, two-tone, hand-painted coachlines, grille customization.</li>
              <li><strong>Interior:</strong> Hand-stitched leather, Starlight Headliner, custom embroidery, in-car safes.</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>2. Ownership &amp; After‑Sales</h3>
            <ul>
              <li>4 years complimentary scheduled maintenance.</li>
              <li>4‑year unlimited mileage warranty.</li>
              <li>24/7 roadside assistance &amp; mobile technicians.</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>3. Rolls‑Royce Provenance (CPO)</h3>
            <ul>
              <li>Comprehensive inspections and warranty for pre‑owned vehicles.</li>
              <li>Concierge services and financing support.</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>4. Lifestyle &amp; Concierge</h3>
            <ul>
              <li><strong>Whispers App:</strong> Exclusive app for owners with event invites.</li>
              <li><strong>Global Concierge:</strong> Travel, hotel, and delivery arrangements.</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>5. Coachbuild Program</h3>
            <ul>
              <li>One‑of‑a‑kind vehicles (e.g., Sweptail, Boat Tail).</li>
              <li>Direct collaboration with designers. Production takes multiple years.</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>6. Finance &amp; Insurance</h3>
            <ul>
              <li>Tailored finance plans and discreet leasing.</li>
              <li>Custom insurance packages with agreed value.</li>
            </ul>
          </div>
        </div>

        <section>
          <h2 className="section-title">Ownership Experience: Step‑by‑Step</h2>
          <ol>
            <li>
              <strong>Ordering:</strong> Initial meeting, bespoke consultation, color matching, insignias, interior layout.<br />
              <em>Customization Costs (USD):</em>
              <ul>
                <li>Bespoke Paint: $15,000–30,000</li>
                <li>Starlight Headliner: $15,000–25,000</li>
                <li>Embroidered Headrests: $2,000–5,000</li>
                <li>Personalized veneers/inlays: $5,000–10,000</li>
                <li>Custom wheels/coachline: $7,000–12,000</li>
                <li>Fully Bespoke Interior: $30,000–100,000+</li>
              </ul>
            </li>
            <li><strong>Production &amp; Factory Visit:</strong> Build slot reserved after deposit (~$30,000+), car built at Goodwood (~6 months), optional factory visit, Coachbuild (2+ years).</li>
            <li>
              <strong>Delivery Experience:</strong> Home/showroom delivery, feature walkthrough, aftercare team.<br />
              <em>Delivery Extras (USD):</em>
              <ul>
                <li>Personalized delivery set: $1,000–3,000</li>
                <li>Remote/private location delivery: $5,000–15,000</li>
                <li>Factory handover at Goodwood: ~$5,000 (travel‑related)</li>
              </ul>
            </li>
            <li>
              <strong>Maintenance &amp; Warranty:</strong>
              <ul>
                <li>4‑year warranty + servicing: Included</li>
                <li>Oil change (outside warranty): $1,200–2,500</li>
                <li>Annual full service (outside warranty): $3,000–5,000</li>
                <li>Brake pad/rotor replacement: $4,000–7,000</li>
                <li>Tire replacement (4): $2,500–4,000</li>
                <li>Paint protection coating: $5,000–10,000</li>
              </ul>
            </li>
            <li><strong>Insurance &amp; Registration:</strong> Insurance: $6,000–20,000/year, road/luxury tax varies by country, possible import duties.</li>
            <li><strong>Lifestyle Benefits:</strong> Invitations to private events, exclusive travel, Whispers app, concierge for service and storage.</li>
          </ol>
        </section>

        <section>
          <h2 className="section-title">Estimated First‑Year Ownership Costs</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr><th>Item</th><th>Estimated Cost (USD)</th></tr>
              </thead>
              <tbody>
                <tr><td>Base vehicle (e.g. Ghost)</td><td>$350,000</td></tr>
                <tr><td>Bespoke personalization</td><td>$50,000–150,000+</td></tr>
                <tr><td>Registration + tax + fees</td><td>$10,000–50,000+</td></tr>
                <tr><td>Insurance (annual)</td><td>$8,000–15,000</td></tr>
                <tr><td>Maintenance (first 4 yrs)</td><td>Included</td></tr>
                <tr><td><strong>Total (est.)</strong></td><td><strong>$420,000–600,000+</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}