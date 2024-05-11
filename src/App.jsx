import "./App.css";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ShareBurden from "./pages/ShareBurden";
import BurdensLog from './pages/BurdensLog';

function App() {
  return (
    <>
   
      <Layout>
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/share-burden" element={<ShareBurden />}/>
      <Route path="/burdens-log" element={<BurdensLog />}/>
      </Routes>
      </Layout>
     
    </>
  );
}

export default App;
