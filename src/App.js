
import './App.css';
import Index from './compornent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './compornent/detail';
import Create from './compornent/create';
import Update from './compornent/update';
function App() {
  
  return (
  <>
<Routes>
<Route path="/" element={<Index/>}></Route>
<Route path="/create" element={<Create/>}></Route>
<Route path={`/detail/:productID`} element={< Detail/>} />
<Route path={`/update/:productID`} element={< Update/>} />
</Routes>
  </>
  );
}

export default App;
