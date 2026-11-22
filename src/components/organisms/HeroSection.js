import SectionLabel from "../atoms/SectionLabel";
import PrimaryButton from "../atoms/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <SectionLabel>
            EXPLORE PANGASINAN
          </SectionLabel>

          <h1>
            Find beauty in
            <br />
            <span>the unexpected.</span>
          </h1>

          <p>
            Beyond the familiar destinations lies a world
            of hidden beaches, natural wonders, and
            unforgettable experiences.
          </p>

          <PrimaryButton>
            Discover Hidden Gems
          </PrimaryButton>
        </div>

        <div className="hero-note">
          <span>01 — 03</span>
          <span>BEAUTIFUL PLACES TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}