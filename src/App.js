import { Nav, Home } from "./components";

const App = () => {
  return (
    <div className="flex align-center justify-center">
      <div className="w-full text-slate-900">
        <Nav></Nav>
        <Home></Home>
      </div>
    </div>
  );
};

export default App;
