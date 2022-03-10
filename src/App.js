import "./App.css";
import { Header } from "./Comps/Header";
import { Balance } from "./Comps/Balance";
import { IncomeExpences } from "./Comps/IncomeExpences";
import { TransactionList } from "./Comps/TransactionList";
import { AddTransaction } from "./Comps/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
