import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div style={{ backgroundColor: '#FEFAF0'}} className="dark">{routing}</div>;
};

export default App;
