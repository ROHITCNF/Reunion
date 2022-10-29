import './App.css';
import data from "./data";
import FilterComponent from './FilterComponent';
import ShowProperty from './ShowProperty';
import { useState } from 'react';




function App() {

const [location,setLocation] = useState("");
const [propType,setPropType] = useState("");
const [priceRange,setPriceRange] = useState("");
const [date,setDate] = useState("");

const [property,setProperty] = useState([]);



function filterProperties(loc,type,price,date){

//here we have to just set the property
//we have to filter new array by given loc type price and date
const year = Number (date.substr(0,4));
const month =Number (date.substr(5,2));
const day = Number (date.substr(8,2));

//case 1

if(loc && type && price ){
  const lowerPrice=price.substr(1,5);
  const upperPrice=price.substr(8,6);

  const newProperty = (data.filter((item) =>{
  const dataPrice = item.price.substring(1,6);
  const itemYear = item.availableFrom.getFullYear();
  const itemMonth = item.availableFrom.getMonth() +1;
  const itemDay = item.availableFrom.getDate();
  return(
    item.location === loc && 
    lowerPrice<=dataPrice && upperPrice>=dataPrice &&
     item.type === type && 
     itemYear <= year && itemMonth <= month && itemDay <= day
  );
 
 }))
 
 setProperty(newProperty);
 setLocation("");setPriceRange("");setPropType("");setDate("");
}
//case 2
else{
  alert("PLease select the filters");
   setLocation("");setPriceRange("");setPropType("");setDate("");
}
}


  return (
  <>
    <section>

    <div className='main-title'>
     <h2>Search Properties to rent</h2>
    </div>

    <div className='fltr-cmp'>
      <FilterComponent 
      setLocation={setLocation}
      setDate={setDate}
      setPropType={setPropType}
      setPriceRange={setPriceRange}/>
      <input type="date" placeholder='Move In date'  onChange={(event) =>setDate(event.target.value)}></input>
    <button  type='submit' onClick={()=>filterProperties(location,propType,priceRange,date)} style={{margin :"2%"}}>Search</button>
    </div>
    
    <div className='render-prop'>
    {property.map((item,index) =>{
     return (
       <ShowProperty key={item.id} 
    type={item.type} 
     location={item.location} 
     price={item.price}
     image={item.image}
    />
     ) ;
    })}
    
    </div>

    </section>
  </>
    
  );
}

export default App;