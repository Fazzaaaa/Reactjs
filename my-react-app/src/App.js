import React, { useState } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import TodoList from "./TodoList"; 

function Example() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <p>
        {name} berumur {age} tahun dan emailnya adalah {email}.
      </p>
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Aplikasi React Faza</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Selamat Datang di Aplikasi React Faza!</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Faza</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Faza" />
      <Counter />
      <Example />
      <TodoList /> {/* Tambahkan TodoList di sini */}
      <Footer />
    </div>
  );
}

export default App;
