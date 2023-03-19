import React, { useState } from "react";
import HoneyMoon from "./components/HoneyMoon";
import {Routes , Route} from 'react-router-dom'
import Home from "./components/Home";
import Family from "./components/Family";
import Holiday from "./components/Holiday";
import Ads from "./components/Ads";
import DltHoneymoon from "./components/DltHoneymoon";
import DltFamily from "./components/DltFamily";
import DltHoliday from "./components/DltHoliday";
import DltAds from "./components/DltAds";
import Resorts from "./components/resorts/Resorts";
import TrivandrumForm from "./components/resorts/addResortsForms/TrivandrumForm";
import KumarakomForm from "./components/resorts/addResortsForms/KumarakomForm";
import AlleppeyForm from "./components/resorts/addResortsForms/AlleppeyForm";
import MunnarForm from "./components/resorts/addResortsForms/MunnarForm";
import VagamonForm from "./components/resorts/addResortsForms/VagamonForm";
import ThekkadyForm from "./components/resorts/addResortsForms/ThekkadyForm";
import KochiForm from "./components/resorts/addResortsForms/KochiForm";
import WayanadForm from "./components/resorts/addResortsForms/WayanadForm";
import CalicutForm from "./components/resorts/addResortsForms/CalicutForm";
import ThrissurForm from "./components/resorts/addResortsForms/ThrissurForm";
import MalappuramForm from "./components/resorts/addResortsForms/MalappuramForm";
import KannurForm from "./components/resorts/addResortsForms/KannurForm";
import KasargodForm from "./components/resorts/addResortsForms/KasargodForm";
import CoorgForm from "./components/resorts/addResortsForms/CoorgForm";
import KodaikkanalForm from "./components/resorts/addResortsForms/KodaikkanalForm";
import OotyForm from "./components/resorts/addResortsForms/OotyForm";
import DltResorts from "./components/resorts/DltResorts";
import DltTrivandrum from "./components/resorts/dltResorts/DltTrivandrum";
import DltKumarakom from "./components/resorts/dltResorts/DltKumarakom";
import DltAlleppey from "./components/resorts/dltResorts/DltAlleppey";
import DltMunnar from "./components/resorts/dltResorts/DltMunnar";
import DltVagamon from "./components/resorts/dltResorts/DltVagamon";
import DltThekkady from "./components/resorts/dltResorts/DltThekkady";
import DltKochi from "./components/resorts/dltResorts/DltKochi";
import DltWayanad from "./components/resorts/dltResorts/DltWayanad";
import DltCalicut from "./components/resorts/dltResorts/DltCalicut";
import DltThrissur from "./components/resorts/dltResorts/DltThrissur";
import DltMalappuram from "./components/resorts/dltResorts/DltMalappuram";
import DltKannur from "./components/resorts/dltResorts/DltKannur";
import DltKasargod from "./components/resorts/dltResorts/DltKasargod";
import DltCoorg from "./components/resorts/dltResorts/DltCoorg";
import DltKodaikkanal from "./components/resorts/dltResorts/DltKodaikkanal";
import DltOoty from "./components/resorts/dltResorts/DltOoty";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/honeymoon" element={<HoneyMoon/>} />
        <Route path="/family" element={<Family/>} />
        <Route path="/holiday" element={<Holiday/>} />
        <Route path="/ads" element={<Ads/>} />
        <Route path="/dlthoneymoon" element={<DltHoneymoon/>} />
        <Route path="/dltfamily" element={<DltFamily/>} />
        <Route path="/dltholiday" element={<DltHoliday/>} />
        <Route path="/dltads" element={<DltAds/>} />
        <Route path="/resorts" element={<Resorts/>} />
        <Route path="/deleteresorts" element={<DltResorts/>} />

        //adding resorts routes
        <Route path="/addtrivandrum" element={<TrivandrumForm/>} />
        <Route path="/addkumarakom" element={<KumarakomForm/>} />
        <Route path="/addalleppey" element={<AlleppeyForm/>} />
        <Route path="/addmunnar" element={<MunnarForm/>} />
        <Route path="/addvagamon" element={<VagamonForm/>} />
        <Route path="/addthekkady" element={<ThekkadyForm/>} />
        <Route path="/addkochi" element={<KochiForm/>} />
        <Route path="/addwayanad" element={<WayanadForm/>} />
        <Route path="/addcalicut" element={<CalicutForm/>} />
        <Route path="/addthrissur" element={<ThrissurForm/>} />
        <Route path="/addmalappuram" element={<MalappuramForm/>} />
        <Route path="/addkannur" element={<KannurForm/>} />
        <Route path="/addkasargod" element={<KasargodForm/>} />
        <Route path="/addcoorg" element={<CoorgForm/>} />
        <Route path="/addkodaikkanal" element={<KodaikkanalForm/>} />
        <Route path="/addooty" element={<OotyForm/>} />

        //deleting resorts routes
        <Route path="/deletetrivandrum" element={<DltTrivandrum/>} />
        <Route path="/deletekumarakom" element={<DltKumarakom/>} />
        <Route path="/deletealleppey" element={<DltAlleppey/>} />
        <Route path="/deletemunnar" element={<DltMunnar/>} />
        <Route path="/deletevagamon" element={<DltVagamon/>} />
        <Route path="/deletethekkady" element={<DltThekkady/>} />
        <Route path="/deletekochi" element={<DltKochi/>} />
        <Route path="/deletewayanad" element={<DltWayanad/>} />
        <Route path="/deletecalicut" element={<DltCalicut/>} />
        <Route path="/deletethrissur" element={<DltThrissur/>} />
        <Route path="/deletemalappuram" element={<DltMalappuram/>} />
        <Route path="/deletekannur" element={<DltKannur/>} />
        <Route path="/deletekasargod" element={<DltKasargod/>} />
        <Route path="/deletecoorg" element={<DltCoorg/>} />
        <Route path="/deletekodaikkanal" element={<DltKodaikkanal/>} />
        <Route path="/deleteooty" element={<DltOoty/>} />

      </Routes>
    </div>
  );
}

export default App;
