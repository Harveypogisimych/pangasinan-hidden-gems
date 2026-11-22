import SectionLabel from "../atoms/SectionLabel";

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <div className="destination-image">
        <img
          src={destination.image}
          alt={`View of ${destination.name}`}
        />

        <span className="image-tag">
          {destination.featured}
        </span>
      </div>

      <div className="destination-content">
        <SectionLabel>
          {destination.category}
        </SectionLabel>

        <h3>{destination.name}</h3>

        <p className="destination-location">
          📍 {destination.location}
        </p>

        <p className="destination-description">
          {destination.description}
        </p>

        <a
          href="#about"
          className="destination-link"
        >
          Discover destination <span>→</span>
        </a>
      </div>
    </article>
  );
}