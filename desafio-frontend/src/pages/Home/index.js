import axios from "axios";
import { useEffect, useState } from "react";
import { CityCard } from "../../components/CityCard";
import { Search } from "../../components/Search";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [citys, setCitys] = useState({
    city: [],
  });

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await axios.get(
          "https://weatherdbi.herokuapp.com/data/weather/saopaulo"
        );
        setCitys({ city: [response.data] });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCity();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="h-screen">
      <h1 className="text-white font-bold text-4xl ml-8 pt-5 pr-44 pb-10">
        Previsão do tempo
      </h1>
      <Search citys={citys} setCitys={setCitys} />
      <hr className="mt-8" />
      <h2 className="text-white font-bold text-2xl ml-8 pt-5 pr-44 pb-10">
        Capitais
      </h2>
      {citys.city.map((currentCity) => {
        return <CityCard currentCity={currentCity} />;
      })}
    </div>
  );
}
