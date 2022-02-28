import React , {useState} from "react"; 

function App() {
  const [firstName, setFirstName] = useState('');
  
  return (
    <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
  );
}

export default App;