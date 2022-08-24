import LanguageSelect from "@components/languageSelect/languageSelect";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [currentLan, setCurrentLan] = useState("국문");

  return (
    <main>
      <LanguageSelect currentLan={currentLan} onSelectLan={setCurrentLan} />
    </main>
  );
};

export default Home;
