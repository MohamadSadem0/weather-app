import React from "react";

const card = ({ iconLink, date, condition, temperature }) => {
  return (
    <div className="card">
      <div className="ft-size-64 center"> {date}</div>
      <img className="weather-icon center mt-55" src={iconLink} alt="" />
      <div className="Temperture ft-size-32 mt-55">
        <span className="Temperture ft-size-32"> Temperature: </span>
        {temperature}
        <span>&deg;</span>
      </div>
    </div>
  );
};

export default card;

// &#xb0

// const getdata= async()=>{
// const reponse= await axios.get("");
// console.log(reponse)
// response.map(e){

// }
// }
