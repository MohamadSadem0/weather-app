import React from "react";

const card = ({ iconLink, date, condition, tempeture }) => {
  return (
    <div className="card">
      <div> {date}</div>
      <img className="weather-icon" src={iconLink} alt="" />
      <div className="Temperture">
        {tempeture}
        <span>&#xb0</span>
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
