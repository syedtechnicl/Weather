import { useEffect, useState } from "react";

const App = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Mumbai");
  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a2d98acbc723a7419beb75588529cb30`;

      const response = await fetch(url);

      const resjson = await response.json();
      setcity(resjson.main);
      // console.log(url);
      // a2d98acbc723a7419beb75588529cb30
    };
    fetchapi();
  }, [search]);

  return (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-12">
    <center className="p-5">
    <br /><br />
      <div className="box bg bg-primary text-white" >
        <input
          style={{textTransform:'capitalize'}}
          type="text"
          className="inputfield form-control"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          
          }}
        />
        <br />

      {!city ? (
        <p>No Data Founf</p>
      ) : (
        <>
          <div className="info p-5">
            <h2 className="location p-3">
              <i className="fa fa-street-view"></i>
              {search}
            </h2>
            <i className="fa fa-cloud-moon-rain"></i>
            <div><i className="fa fa-soundcloud p-2" style={{fontSize:'36px'}}></i></div>
            <h1 className="temp p-3">{city.temp}°Cel</h1>
            <p>Min : {city.temp_min} °Cel | Max : {city.temp_min} °Cel</p>
          </div>


          <div className="wave-one"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
        </>
      )}
</div>
      </center>
    </div>

    </div>

    </div>

{/* no */}


    </>
  );
};
export default App;
