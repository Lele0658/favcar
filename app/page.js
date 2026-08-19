import Header from './components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Luxury Redefined</h1>
          <p>Experience the epitome of hand-crafted automotive excellence. Trusted to deliver perfection.</p>
          <Link href="/models" className="btn-gold">Explore Models</Link>
        </div>
      </section>
      <main className="main-content">
        <section>
          <h2 className="section-title">Welcome to the Pinnacle of Automotive Art</h2>
          <p className="intro-text" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Every Rolls‑Royce is a masterpiece of engineering and artistry.<br />
            From the whispering silence of the V12 engine to the hand-stitched leathers,
            we invite you to discover a world where luxury has no limits.
          </p>
        </section>
        <div className="image-row">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/502/603/original/rolls-royce-brand-logo-symbol-with-name-white-design-british-car-automobile-illustration-with-black-background-free-vector.jpg"
            alt="Rolls-Royce Logo"
          />
          <img
            src="/images/Background-image.jpg"
            alt="Rolls-Royce Car"
            className="hero-image"
          />
          <img
            src="https://th.bing.com/th/id/OIP.DBa7NMiZ_kcsQNUZqS2OBQHaHc?w=184&h=185&c=7&r=0&o=5&pid=1.7"
            alt="Hood Ornament"
          />
        </div>
      </main>
    </>
  );
}