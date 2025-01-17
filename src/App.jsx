import React, { useState } from "react";
import "./App.css";
import bg from "./assets/bg.png";
import pitbull from "./assets/pitbull.png";
import husky from "./assets/husky.png";
import saintbernard from "./assets/saintbernard.png";
import germanshepherd from "./assets/germanshepherd.png";
import shibainu from "./assets/shibainu.png";
import chihuahua from "./assets/chihuahua.png";
import bermesemountain from "./assets/bermesemountain.png";
import dalmatian from "./assets/dalmatian.png";
import cranecorso from "./assets/cranecorso.png";
import corgi from "./assets/corgi.png";
import samoyed from "./assets/samoyed.png";
import goldenretriever from "./assets/goldenretriever.png";

const data = [
  { id: 1, name: "Iron Man", breed: "Husky", age: 5, image: husky },
  {
    id: 2,
    name: "Captain America",
    breed: "German Shepherd",
    age: 5,
    image: germanshepherd,
  },
  { id: 3, name: "Thor", breed: "Saint Bernard", age: 5, image: saintbernard },
  { id: 4, name: "Hulk", breed: "Pitbull", age: 5, image: pitbull },
  {
    id: 5,
    name: "Black Panther",
    breed: "Bermese Mountain",
    age: 5,
    image: bermesemountain,
  },
  { id: 6, name: "Captain Marvel", breed: "Husky", age: 5, image: chihuahua },
  { id: 7, name: "Spiderman", breed: "Shiba Inu", age: 5, image: shibainu },
  { id: 8, name: "Groot", breed: "Corgi", age: 5, image: corgi },
  { id: 9, name: "Thanos", breed: "Cranes Corso", age: 5, image: cranecorso },
  { id: 10, name: "Venom", breed: "Samoyed", age: 5, image: samoyed },
  { id: 11, name: "Ant man", breed: "Dalmatian", age: 5, image: dalmatian },
  {
    id: 12,
    name: "Wolverine",
    breed: "Golden Retriever",
    age: 5,
    image: goldenretriever,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter dogs based on the search term
  const filteredDogs = data.filter(
    (dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <img src={bg} alt="background" className="main" />
      <h1>Dogs Data</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 5, marginBottom: "10px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {filteredDogs.map((dog) => (
          <div key={dog.id} className="card">
            <h1>
              {dog.id}.{dog.name}
            </h1>
            <img src={dog.image} alt={dog.name} style={{ width: "100px" }} />
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
