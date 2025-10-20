import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/weapons')
      .then((res) => res.json())
      .then(setWeapons)
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        <h1>Weapons</h1>
        <ul>
          {weapons.map((w: any) => (
            <li key={w.id}>
              {w.name} — Damage: {w.damage}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
