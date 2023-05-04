import React, { useState } from 'react';

function TowerOfHanoi() {
  const [disks, setDisks] = useState(3);
  const [sourcePole, setSourcePole] = useState('A');
  const [destinationPole, setDestinationPole] = useState('C');
  const [auxiliaryPole, setAuxiliaryPole] = useState('B');
  const [moves, setMoves] = useState([]);

  function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      setMoves(moves => [...moves, `Move disk 1 from ${source} to ${destination}`]);
      return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    setMoves(moves => [...moves, `Move disk ${n} from ${source} to ${destination}`]);
    towerOfHanoi(n - 1, auxiliary, destination, source);
  }

  function handleSolve() {
    setMoves([]);
    towerOfHanoi(disks, sourcePole, destinationPole, auxiliaryPole);
  }

  return (
    <div>
      <h1>Tower of Hanoi</h1>
      <div>
        <label htmlFor="disks">Number of disks:</label>
        <input
          id="disks"
          type="number"
          min="1"
          value={disks}
          onChange={event => setDisks(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="source-pole">Source pole:</label>
        <input
          id="source-pole"
          type="text"
          value={sourcePole}
          onChange={event => setSourcePole(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destination-pole">Destination pole:</label>
        <input
          id="destination-pole"
          type="text"
          value={destinationPole}
          onChange={event => setDestinationPole(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="auxiliary-pole">Auxiliary pole:</label>
        <input
          id="auxiliary-pole"
          type="text"
          value={auxiliaryPole}
          onChange={event => setAuxiliaryPole(event.target.value)}
        />
      </div>
      <button onClick={handleSolve}>Solve</button>
      <ul>
        {moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
}

export default TowerOfHanoi;

