
"use client";

import { useState } from "react";

import SiteHeader from "@/components/organisms/SiteHeader";
import HeroSection from "@/components/organisms/HeroSection";
import DestinationCard from "@/components/molecules/DestinationCard";
import SectionLabel from "@/components/atoms/SectionLabel";
import destinations from "@/data/destinations";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((destination) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      destination.name.toLowerCase().includes(search) ||
      destination.location.toLowerCase().includes(search) ||
      destination.category.toLowerCase().includes(search) ||
      destination.description.toLowerCase().includes(search)
    );
  });

  return (
    <main>
      <SiteHeader />

      <HeroSection />

      <section
        className="destinations-section"
        id="destinations"
      >
        <div className="section-heading">
          <div>
            <SectionLabel>THE PLACES</SectionLabel>

            <h2>
              Uncover something
              <br />
              <span>extraordinary.</span>
            </h2>
          </div>

          <p>
            From peaceful rivers to hidden coastal
            treasures, explore the destinations that
            make Pangasinan special.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="search"
              placeholder="Search destinations, locations, or categories..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search destinations"
            />

            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <p className="search-results">
            {searchTerm
              ? `${filteredDestinations.length} destination(s) found`
              : `Explore all ${destinations.length} destinations`}
          </p>
        </div>

        {/* DESTINATION RESULTS */}
        <div className="destination-grid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))
          ) : (
            <div className="no-results">
              <span>⌕</span>
              <h3>No destinations found</h3>
              <p>
                We couldn&apos;t find a destination matching
                &quot;{searchTerm}&quot;. Try another keyword.
              </p>

              <button
                onClick={() => setSearchTerm("")}
                className="reset-search"
              >
                View all destinations
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="about-section" id="about">
        <SectionLabel>OUR PURPOSE</SectionLabel>

        <h2>
          Every destination
          <br />
          has a story worth discovering.
        </h2>

        <p>
          Pangasinan Hidden Gems is a digital tourism
          showcase designed to introduce visitors to
          the natural beauty and remarkable places
          of Pangasinan.
        </p>
      </section>

      <footer className="site-footer">
        <h3>PANGASINAN HIDDEN GEMS</h3>

        <p>
          Discover more. Explore deeper. Experience Pangasinan.
        </p>

        <small>
          © 2026 Pangasinan Hidden Gems. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
