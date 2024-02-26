import "./App.css";
import { CustomerForm } from "./components/CustomerForm";

function App() {
  return (
    <div className="w-screen bg-slate-50 flex flex-col justify-center items-center">
      <h1 className="my-20 text-3xl	text-stone-600">Cadastro de Cliente</h1>
      <CustomerForm />
    </div>
  );
}

export default App;
