import React, { useState, useEffect } from 'react';

const Fib = () => {
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: ''
  });

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchIndexes = async () => {
    const response = await fetch('/api/values');
    const seenIndexes = await response.json();

    setState((prevState) => ({
      ...prevState,
      seenIndexes
    }));
  }

  const fetchValues = async () => {
    const response = await fetch('/api/values/current');
    const values = await response.json();

    setState((prevState) => ({
      ...prevState,
      values
    }));
  };

  const renderSeenIndexes = () => {
    return state.seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderCalculatedValues = () => {
    return Object.keys(state.values).map((key) => {
      return (
        <div key={key}>
          For index {key} I calculated {state.values[key]}
        </div>
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/api/values', {
      method: 'POST',
      body: JSON.stringify({ index: state.index }),
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    });

    setState(prevState => ({
      ...prevState,
      index: ''
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index</label>
        <br />
        <input value={state.index} onChange={event => setState(prevState => ({
          ...prevState,
          index: event.target.value
        }))} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderCalculatedValues()}
    </div>
  );
};

export default Fib;