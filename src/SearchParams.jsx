import { useState } from "react";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("Seattle, WA");
  const [breed, setBreed] = useState("");
  const BREEDS = [];

  //   const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
              ))}
            </select>
          </label>
          <label htmlFor="Breed">
            Breed
            <select
              id="breed"
              disabled={BREEDS.length === 0}
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            >
              <option />
              {BREEDS.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
            </select>
          </label>
          <button>Submmit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
