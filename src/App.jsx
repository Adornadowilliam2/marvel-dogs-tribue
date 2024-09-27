import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bg from "./assets/bg.png";

const data = [
  {
    id: 1,
    name: "Iron Man",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Captain America",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Thor",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Hulk",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    name: "Black Panther",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    name: "Captain Marvel",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    name: "Spiderman",
    breed: "Husky",
    age: "5",
    image:
      "https://images.unsplash.com/photo-1600486913747-6c69d0d63c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
function App() {
  return (
    <>
      <img src={bg} alt="background" />
      <h1>Dogs Data</h1>
      {data.map((dog) => (
        <div key={dog.id}>
          <h1>{dog.name}</h1>
          <img src={dog.image} alt={dog.name} />
          <p>{dog.breed}</p>
          <p>{dog.age}</p>
        </div>
      ))}
    </>
  );
}

export default App;
