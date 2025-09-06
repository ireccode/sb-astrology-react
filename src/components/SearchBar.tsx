import React, { useState, useRef, useEffect } from 'react';
import Fuse from 'fuse.js';
import { services } from '../lib/searchData';

const fuse = new Fuse(services, {
  keys: [
    'title',
    'description',
    'synonyms',
  ],
  threshold: 0.35,
  includeScore: true,
});

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const fuseResults = fuse.search(query).slice(0, 5);
      setResults(fuseResults.map(r => r.item));
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!inputRef.current?.parentElement?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (service: any) => {
    setShowDropdown(false);
    setQuery('');
    // Scroll to services section and highlight
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Optionally highlight the section
      section.classList.add('ring-4', 'ring-primary', 'transition');
      setTimeout(() => {
        section.classList.remove('ring-4', 'ring-primary', 'transition');
      }, 1600);
    }
  };

  return (
    <div className="w-64">
      <input
        ref={inputRef}
        type="text"
        className="w-full px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Search services..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => query && setShowDropdown(true)}
        aria-label="Search services"
      />
      {showDropdown && results.length > 0 && (
        <ul className="absolute left-0 mt-1 w-full bg-background border border-border rounded-md shadow-lg z-50">
          {results.map((service, idx) => (
            <li
              key={service.title}
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer text-sm"
              onClick={() => handleSelect(service)}
            >
              <span className="font-semibold">{service.title}</span>
              <span className="block text-xs text-muted-foreground">{service.description}</span>
            </li>
          ))}
        </ul>
      )}
      {showDropdown && query && results.length === 0 && (
        <div className="absolute left-0 mt-1 w-full bg-background border border-border rounded-md shadow-lg z-50 px-4 py-2 text-muted-foreground text-sm">
          No matching services found. Try different keywords!
        </div>
      )}
    </div>
  );
};

export default SearchBar;
