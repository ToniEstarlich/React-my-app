

import Header from "./components/Header";
import Counter from "./components/Counter";
import UserContainer from "./components/UserContainer";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <h1>Hello, I'm Toni ☄</h1>
        <Counter />
        <UserContainer />
      </main>

      <Footer />
    </>
  );
}

export default App;
