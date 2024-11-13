import React, { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function CurrencyConverter() {
  const [currCurrency, setCurrCurrency] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [tocurr, setToCurr] = useState("EUR");
  const [convertedCurr, setConvertedCurr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function ConvertCurrency() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currCurrency}&from=${fromCurr}&to=${tocurr}`
        );
        const data = await res.json();
        setConvertedCurr(data.rates[tocurr]);
        setIsLoading(false);
      }
      if (fromCurr === tocurr) return setConvertedCurr(currCurrency);
      ConvertCurrency();
    },
    [currCurrency, fromCurr, tocurr]
  );

  return (
    <>
      <div className="text-center pt-5">
        <p style={{ fontSize: "24px" }}>Currency Converter</p>
        <input
          type="text"
          className="m-2"
          value={currCurrency}
          onChange={(e) => setCurrCurrency(Number(e.target.value))}
          disabled={isLoading}
        />
        <select
          className="m-3"
          value={fromCurr}
          onChange={(e) => setFromCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={tocurr}
          onChange={(e) => setToCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>
          {convertedCurr} {tocurr}
        </p>
      </div>
    </>
  );
}
