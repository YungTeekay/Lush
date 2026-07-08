import Nav from "@/components/Nav";
import {
  ArrowRightIcon,
  AwardIcon,
  BathIcon,
  BedIcon,
  CalculatorIcon,
  CarIcon,
  FacebookIcon,
  HandHeartIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SearchIcon,
  ShieldCheckIcon,
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
  {
    price: "R2 250 000",
    title: "4 Bed Family Home",
    suburb: "Honeydew, Roodepoort",
    beds: 4,
    baths: 3,
    parking: 2,
    img: "photo-1600573472592-401b489a3cdc",
    alt: "Spacious double-storey home with an entertainment area",
  },
  {
    price: "R1 495 000",
    title: "3 Bed Townhouse",
    suburb: "Florida Hills, Roodepoort",
    beds: 3,
    baths: 2,
    parking: 1,
    img: "photo-1605146769289-440113cc3d00",
    alt: "Neat family home with a tidy front lawn in the afternoon sun",
  },
  {
    price: "R980 000",
    title: "2 Bed Apartment",
    suburb: "Roodepoort Central",
    beds: 2,
    baths: 1,
    parking: 1,
    img: "photo-1600047509807-ba8f99d2cdde",
    alt: "Neat apartment block with secure parking and green lawns",
  },
];

const whyCards = [
  {
    icon: <ShieldCheckIcon />,
    title: "Honest guidance",
    copy: "I'll tell you what a home is really worth — even when it's not what you were hoping to hear. No inflated valuations, no surprises at the bank.",
  },
  {
    icon: <CalculatorIcon />,
    title: "Bond & financing help",
    copy: "From pre-qualification to final approval, I'll walk you through the bond process and connect you with originators who fight for the best rate.",
  },
  {
    icon: <MapPinIcon />,
    title: "I know these suburbs",
    copy: "Schools, complexes, traffic on Hendrik Potgieter — I grew up here. I'll match you to the pocket of the West Rand that actually fits your life.",
  },
  {
    icon: <HandHeartIcon />,
    title: "No-pressure service",
    copy: "Buying a home is a big decision. Take your time, ask every question twice, and view a place as often as you need. I'm here when you're ready.",
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

              <form className="hero-search" aria-label="Property search">
                <div className="field">
                  <label htmlFor="search-location">Location</label>
                  <select id="search-location" defaultValue="">
                    <option value="" disabled>
                      Choose a suburb
                    </option>
                    <option>Weltevredenpark</option>
                    <option>Florida Hills</option>
                    <option>Little Falls</option>
                    <option>Wilgeheuwel</option>
                    <option>Honeydew</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="search-price">Price range</label>
                  <select id="search-price" defaultValue="">
                    <option value="" disabled>
                      Any price
                    </option>
                    <option>Under R1 000 000</option>
                    <option>R1 000 000 – R1 500 000</option>
                    <option>R1 500 000 – R2 000 000</option>
                    <option>R2 000 000+</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="search-beds">Bedrooms</label>
                  <select id="search-beds" defaultValue="">
                    <option value="" disabled>
                      Any
                    </option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary">
                  <SearchIcon />
                  Search
                </button>
              </form>
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
              src={unsplash("photo-1507003211169-0a1dd7228f2d", 800)}
              alt="Lush, a relaxed and friendly real estate agent, smiling at the camera"
              loading="lazy"
            />
            <div>
              <p className="about-kicker">About Lush</p>
              <h2>Hi, I&rsquo;m Lush — your neighbour first, your agent second.</h2>
              <div className="about-copy">
                <p>
                  I grew up on the West Rand, went to school in Florida, and
                  still do my Saturday shopping at Clearwater Mall. When I show
                  you a house, I can tell you which schools have waiting lists,
                  where the traffic backs up at 7am, and which complexes have
                  the well-run body corporates.
                </p>
                <p>
                  I work alone, on purpose. When you call, you get me — not a
                  call centre, not a junior. From your first viewing to the day
                  the transfer goes through, I&rsquo;m the one person walking
                  the road with you.
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

        {/* Why work with Lush */}
        <section id="why" className="section">
          <div className="container">
            <h2 className="section-heading">Why work with me</h2>
            <p className="section-sub">
              Buying or selling in the middle of the market comes with real
              worries. Here&rsquo;s how I handle them.
            </p>
            <div className="why-grid">
              {whyCards.map((card) => (
                <article key={card.title} className="why-card">
                  <span className="why-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
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
                <a href="#why">Sellers</a>
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
