import { useState } from "react";
import GlobalStyles from "./components/Globalstyles";
import { Particles, Nav } from "./components/SharedComponents";
import HomePage from "./components/HomePage";
import LovePage from "./components/LovePage";
import BTSPage from "./components/BTSPage";
import UsPage from "./components/UsPage";
import { TABS } from "./components/constants";

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