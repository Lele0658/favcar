import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">About Rolls‑Royce</h1>
        <section>
          <h2 className="section-title">Basic Information</h2>
          <ul>
            <li><strong>Founded:</strong> 1906 (original brand), current company under BMW Group since 1998</li>
            <li><strong>Headquarters & Manufacturing:</strong> Goodwood, West Sussex, England</li>
            <li><strong>Known For:</strong> Hand-built, ultra-luxury vehicles with world-class craftsmanship and refinement</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Craftsmanship &amp; Philosophy</h2>
          <ul>
            <li>Bespoke philosophy: Every Rolls‑Royce is tailored to the customer's exact tastes.</li>
            <li>Hand-assembled: Each vehicle takes months to build with meticulous attention to detail.</li>
            <li>Iconic "Spirit of Ecstasy" mascot on every hood.</li>
            <li>Renowned for the smoothest ride possible, thanks to advanced air suspension systems.</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Current &amp; Iconic Models</h2>
          <ul>
            <li><strong>Phantom:</strong> Flagship model, pinnacle of luxury, V12 engine, whisper-quiet cabin.</li>
            <li><strong>Ghost:</strong> Slightly smaller, modern, minimalist, V12 engine, targets younger buyers.</li>
            <li><strong>Cullinan:</strong> First-ever SUV, off-road ability, top-tier luxury, most practical model.</li>
            <li><strong>Spectre:</strong> First fully electric Rolls‑Royce, launched 2023, signals shift to electric future.</li>
            <li><strong>Wraith</strong> (discontinued 2023): High-performance coupé, fastest and most powerful.</li>
            <li><strong>Dawn</strong> (discontinued 2023): Convertible, elegant open-top driving.</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Interior Luxury Highlights</h2>
          <ul>
            <li>Real wood veneers, hand-stitched leather, and metal inlays</li>
            <li>"Starlight Headliner" – fiber optic lights mimic a night sky</li>
            <li>Rear seats: recliners, champagne coolers, picnic tables, custom monograms</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Unique Features &amp; Innovations</h2>
          <ul>
            <li>Coach Doors (rear-hinged for graceful entry/exit)</li>
            <li>Umbrellas in the doors</li>
            <li>Self-leveling wheel centers ("RR" logo always upright)</li>
            <li>Silence engineering for nearly silent cabins</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Future Vision</h2>
          <ul>
            <li>Fully electric brand by 2030</li>
            <li>Focus on sustainability without compromising luxury</li>
            <li>Spectre is the beginning of this transition</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Brand Prestige</h2>
          <ul>
            <li>Symbol of success, wealth, and exclusivity</li>
            <li>Very low production volume (approx. 6,000–7,000 cars per year)</li>
            <li>Most owners are repeat customers, often ordering multiple models</li>
          </ul>
        </section>
      </main>
    </>
  );
}