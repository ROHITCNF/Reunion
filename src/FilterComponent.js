import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const locations = [
 {label:"Goregaon",value:1},
 {label:"Andheri West",value:2},
 {label:"Powai",value:3},
 {label:"Navi Mumbai",value:4},
];
const propertyTypes =[
    {label:"Home 1-BHK",value:1},
    {label:"Home 2-BHK",value:2},
    {label:"Home 3-BHK",value:3},
    {label:"Office",value:4},
];
const priceRanges = [
     {label:"₹10000-₹20000",value:1},
    {label:"₹20000-₹40000",value:2},
    {label:"₹40000-₹60000",value:3},
    {label:"₹60000-₹9000",value:4},
];

const FilterComponent= ({setLocation,setDate,setPriceRange,setPropType}) => (

  <div className="container" >
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">

        <Select options={ locations } placeholder="Location" onChange={(event) => setLocation(event.label)} />
        <Select options={ propertyTypes } placeholder="Property Type" onChange={(event) => setPropType(event.label)} />
        <Select options={ priceRanges } placeholder="Price Range" onChange={(event) => setPriceRange(event.label)} />
      </div>
      <div className="col-md-4"></div>
    </div>  
     
  </div>
 
  
);

export default FilterComponent;