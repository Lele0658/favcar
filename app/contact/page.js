import Header from '../components/Header';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">Contact Us</h1>
        <section>
          <h2 className="section-title">Showroom Details</h2>
          <ul>
            <li><strong>Address:</strong> 126 Rivonia Road, Corner Daisy Road, Sandton, 2146, Johannesburg, SA</li>
            <li><strong>Telephone:</strong> <a href="tel:+27113017000">+27 11 301 7000</a></li>
            <li><strong>Fax:</strong> <a href="tel:+27866013269">+27 86 601 3269</a></li>
            <li><strong>Opening Hours:</strong> Mon‑Fri: 8AM–6PM, Sat: 9AM–1PM, Sun: By appointment</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Key Contacts</h2>
          <ul>
            <li><strong>Anna Koury</strong> – General Manager</li>
            <li><strong>Jason Danker</strong> – Sales Director</li>
            <li><strong>Chyvan Mahabeer</strong> – PR &amp; Marketing Manager</li>
            <li><strong>Jody Hin</strong> – Ownership Services Manager</li>
          </ul>
          <p>For all inquiries, please call: <a href="tel:+27113017000">+27 11 301 7000</a></p>
        </section>
        <section>
          <h2 className="section-title">Online Resources</h2>
          <ul>
            <li><strong>Official Website:</strong> <a href="https://www.rolls-roycemotorcars.com/johannesburg/en_GB/showroom.html" target="_blank" rel="noopener noreferrer">Rolls‑Royce Johannesburg</a></li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/rollsroyce_za/" target="_blank" rel="noopener noreferrer">@rollsroyce_za</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}