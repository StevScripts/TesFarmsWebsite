"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { PlantCategory } from "@/data/plant-catalog";
import { whatsappLink } from "./contact-links";

export function VarietyList({
  varieties,
}: {
  varieties: PlantCategory["varieties"];
}) {
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const search = query.trim().toLocaleLowerCase();
  const matches = varieties.filter((plant) =>
    `${plant.name} ${plant.description}`.toLocaleLowerCase().includes(search),
  );
  return (
    <div>
      <div className="catalog-toolbar">
        <div>
          <label htmlFor="plant-search">Find a plant</label>
          <div className="search-field">
            <Search size={20} aria-hidden="true" />
            <input
              ref={searchInput}
              id="plant-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name or feature"
            />
          </div>
        </div>
        <p role="status" aria-live="polite">
          {search
            ? `${matches.length} of ${varieties.length} plants`
            : `${varieties.length} plants`}
        </p>
      </div>
      <div className="variety-list">
        {matches.map((plant) => (
          <article className="variety-row" key={plant.id} id={plant.id}>
            <div>
              <h2>{plant.name}</h2>
              {plant.season ? (
                <span className="season">Fruiting: {plant.season}</span>
              ) : null}
            </div>
            <p>{plant.description}</p>
            <a
              href={whatsappLink(
                `Hi George, I'm interested in ${plant.name}. Is it available, and what sizes and prices do you have?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask George about ${plant.name}`}
            >
              Ask George <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        ))}
        {matches.length === 0 ? (
          <div className="empty-results">
            <h2>No matching plants</h2>
            <p>Try another name, or clear your search.</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setQuery("");
                searchInput.current?.focus();
              }}
            >
              Clear search
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
