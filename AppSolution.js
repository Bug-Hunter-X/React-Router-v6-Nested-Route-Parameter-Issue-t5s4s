import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;