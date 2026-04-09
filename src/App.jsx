import { useState } from "react";
import GlobalStyles from "./components/Globalstyles.jsx";
import { Particles, Nav } from "./components/Sharedcomponents.jsx";
import HomePage from "./components/Homepage.jsx";
import LovePage from "./components/Lovepage.jsx";
import BTSPage from "./components/Btspage.jsx";
import UsPage from "./components/Uspage.jsx";
import { TABS } from "./components/Constants.js";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <GlobalStyles />
      <div id="bg-mesh" />
      <Particles />
      <Nav tab={tab} setTab={setTab} />

      {TABS.map((t) => (
        <div key={t.id} className={"pg" + (tab === t.id ? " on" : "")}>
          {t.id === "home" && <HomePage setTab={setTab} />}
          {t.id === "love" && <LovePage />}
          {t.id === "bts"  && <BTSPage />}
          {t.id === "us"   && <UsPage />}
        </div>
      ))}
    </>
  );
}