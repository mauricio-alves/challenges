export function CityCard({ currentCity }) {
  return (
    <div className="ml-4">
      <h3>{currentCity.region}</h3>
      <p>
        <span className="font-bold">Min: </span>
        {currentCity.next_days[0].min_temp.c}°.
        <span className="font-bold"> Max: </span>
        {currentCity.next_days[0].max_temp.c}°.
      </p>
    </div>
  );
}
