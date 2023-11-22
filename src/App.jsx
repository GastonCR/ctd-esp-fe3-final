
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import AppRouter from "./Routes/Approuter";


function App() {

  const { state } = useContext(ContextGlobal);

  return (
      <div className={state.theme ? "dark" : null}>
          <AppRouter/>;
          
      </div>
  );
}

export default App;
