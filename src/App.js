import { AddUser } from "./Component/AddUser";
import { Curd } from "./Component/Curd";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Component/Navbar";
import { Edit } from "./Component/Edit";

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index element={<Curd/>}/>
    <Route path="view" element={<AddUser/>}/>
    <Route path="edit" element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
