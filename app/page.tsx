import Nav from "@/components/Nav";
import {
  ArrowRightIcon,
  AwardIcon,
  BathIcon,
  BedIcon,
  CalculatorIcon,
  CarIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const listings = [
  {
    price: "R1 350 000",
    title: "3 Bed Townhouse",
    suburb: "Weltevredenpark, Roodepoort",
    beds: 3,
    baths: 2,
    parking: 2,
    img: "photo-1568605114967-8130f3a36994",
    alt: "Face-brick townhouse with a neat lawn and paved driveway",
  },
  {
    price: "R1 895 000",
    title: "3 Bed Family Home",
    suburb: "Little Falls, Roodepoort",
    beds: 3,
    baths: 2,
    parking: 2,
    img: "photo-1580587771525-78b9dba3b914",
    alt: "Single-storey family home with a covered porch and garden",
  },
  {
    price: "R1 150 000",
    title: "2 Bed Sectional Title",
    suburb: "Wilgeheuwel, Roodepoort",
    beds: 2,
    baths: 1,
    parking: 1,
    img: "photo-1600585154340-be6161a56a0c",
    alt: "Modern low-maintenance unit with a small private garden",
  },
];

const testimonials = [
  {
    quote:
      "As first-time buyers we had no idea where to start. Lush explained every step — even came with us to the bank. We got our keys eight weeks later.",
    name: "Thabo & Naledi M.",
    context: "First-time buyers, Weltevredenpark",
    initials: "TM",
  },
  {
    quote:
      "He told us our asking price was too high and explained why with real sales from our street. We adjusted, and the house sold in three weeks.",
    name: "Ansie v.d. Berg",
    context: "Seller, Florida Hills",
    initials: "AB",
  },
  {
    quote:
      "We needed a bigger place before the baby arrived. Lush found us a townhouse near my mom in Little Falls and handled the whole transfer while we packed.",
    name: "Kevin & Priya N.",
    context: "Upgraders, Little Falls",
    initials: "KN",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="hero">
          <img
            className="hero-bg"
            src={unsplash("photo-1570129477492-45c003edd2be", 1920)}
            alt="A welcoming single-storey family home with a green lawn in the late-afternoon sun"
            fetchPriority="high"
          />
          <div className="container">
            <div className="hero-content">
              <h1>Your next home is closer than you think.</h1>
              <p className="hero-sub">
                Family homes, townhouses and sectional title units across
                Roodepoort and the West Rand — priced for real life, shown by
                someone who lives here too.
              </p>
              <a href="#listings" className="btn btn-accent">
                Browse Listings
              </a>
            </div>
          </div>
        </section>

        {/* Featured listings */}
        <section id="listings" className="section">
          <div className="container">
            <h2 className="section-heading">Featured listings</h2>
            <p className="section-sub">
              A hand-picked selection of homes on the market right now — all in
              the neighbourhoods I know street by street.
            </p>

            <div className="listings-grid">
              {listings.map((home) => (
                <article key={home.suburb + home.price} className="listing-card">
                  <img
                    className="listing-media"
                    src={unsplash(home.img, 800)}
                    alt={home.alt}
                    loading="lazy"
                    width={800}
                    height={450}
                  />
                  <div className="listing-body">
                    <p className="listing-price">{home.price}</p>
                    <p className="listing-title">{home.title}</p>
                    <p className="listing-suburb">{home.suburb}</p>
                    <div className="listing-specs">
                      <span>
                        <BedIcon /> {home.beds} Bed
                      </span>
                      <span>
                        <BathIcon /> {home.baths} Bath
                      </span>
                      <span>
                        <CarIcon /> {home.parking} Parking
                      </span>
                    </div>
                    <a href="#contact" className="text-link">
                      View Property <ArrowRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <aside className="bond-teaser">
              <div className="bond-teaser-text">
                <span className="bond-teaser-icon">
                  <CalculatorIcon />
                </span>
                <div>
                  <h3>Not sure what you can afford?</h3>
                  <p>
                    Get a quick estimate of your bond repayments before you
                    start viewing.
                  </p>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary">
                Try the bond calculator
              </a>
            </aside>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about section">
          <div className="container about-grid">
            <img
              className="about-portrait"
              src={unsplash("photo-1560250097-0b93528c311a", 800)}
              alt="Lush, a relaxed and friendly real estate agent, smiling at the camera"
              loading="lazy"
            />
            <div>
              <p className="about-kicker">About Lush</p>
              <h2>Hi, I&rsquo;m Lush — your neighbour first, your agent second.</h2>
              <div className="about-copy">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <p className="about-cred">
                <AwardIcon />
                9 years selling homes in the area · 140+ families helped
              </p>
              <a href="#contact" className="text-link">
                More About Me <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials section">
          <div className="container">
            <h2 className="section-heading">What clients say</h2>
            <p className="section-sub">
              Real families, real streets — a few words from people I&rsquo;ve
              helped move.
            </p>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <figure key={t.name} className="quote-card">
                  <blockquote>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="quote-person">
                    <span className="quote-avatar" aria-hidden>
                      {t.initials}
                    </span>
                    <span>
                      <span className="quote-name">{t.name}</span>
                      <br />
                      <span className="quote-context">{t.context}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="contact section">
          <div className="container contact-grid">
            <div>
              <h2>Let&rsquo;s find your home.</h2>
              <p className="contact-intro">
                Send me a message, give me a call, or pop me a WhatsApp —
                whichever feels easiest. I usually reply within the hour.
              </p>
              <div className="contact-lines">
                <a href="tel:+27821234567">
                  <PhoneIcon /> 082 123 4567
                </a>
                <a href="mailto:lush@lushproperties.co.za">
                  <MailIcon /> lush@lushproperties.co.za
                </a>
              </div>
              <a
                href="https://wa.me/27821234567"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>

            <form className="contact-form" aria-label="Enquiry form">
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" type="text" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" name="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder=""
                ></textarea>
              </div>
              <button type="button" className="btn btn-accent">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-top">
            <ul className="footer-links">
              <li>
                <a href="#listings">Listings</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Sellers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="#" aria-label="Lush Properties on Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Lush Properties on Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <p className="footer-legal">
            © {new Date().getFullYear()} Lush Properties · Registered with the
            PPRA (registration no. XXXXXXX) · Roodepoort, Gauteng
          </p>
        </div>
      </footer>
    </>
  );
}
