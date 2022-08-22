import axios from "axios";
import { useEffect, useState } from "react";
import searchIcon from "../../assets/images/search.png";

export function Search({ citys, setCitys }) {
  const [location, setLocation] = useState("");
  const [newCity, setNewCity] = useState({});

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await axios.get(
          `https://weatherdbi.herokuapp.com/data/weather/${location}`
        );
        setNewCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCity();
  }, [location, setNewCity]);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCitys({ ...citys, city: [...citys.city, newCity] });
  }

  return (
    <form action="/" method="GET" className="ml-4 mr-4 flex">
      <input
        type="search"
        placeholder="Insira aqui o nome da cidade"
        className="w-full bg-white placeholder:font-italic border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none"
        value={location}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="absolute pt-3 right-0 flex items-center pr-6"
      >
        <img
          src={searchIcon}
          alt="search icon"
          className="h-5 w-5 fill-black"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        />
      </button>
    </form>
  );
}
