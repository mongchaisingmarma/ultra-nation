import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
    <h1>{countries.length}</h1>
    <h4>Country added : {cart.length}</h4>
    <Cart cart = {cart}></Cart>
    {
      countries.map(country => <Country country = {country} handleAddCountry = {handleAddCountry} key = {country.alpha3Code}></Country>)
    }
    </div>
  );
}

export default App;
