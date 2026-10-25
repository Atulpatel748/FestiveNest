import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-para">
          THE FESTIVE EDIT
        </p>

        <h1>
          Light Up Your
          <br />
          Celebration
        </h1>

        <p className="hero-description">
          Discover beautiful festive lights, decorative diyas
          and home accents to make every corner special.
        </p>

        <div className="hero-buttons">
            <button type="button" className="btn btn-dark">Shop Lighting</button>
            <button type="button" className="btn btn-light">Explore Collections</button>
        </div>

        <p className="hero-note">
          FESTIVE DECOR · LIGHTS · CELEBRATION
        </p>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80"
          alt="Festive celebration decorations"/>
      </div>
    </section>
  );
}
