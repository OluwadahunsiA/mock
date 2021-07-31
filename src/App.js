import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { General } from "./components/General";

import "./styles.scss";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );

  const [showPlatform, setShowPlatform] = React.useState(false);

  function displayPlatform() {
    setShowPlatform(!showPlatform);
    console.log("running");
  }

  console.log(showPlatform);
  return (
    <div className="App__personal-account-container">
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        toggleOpen={setSidebarIsOpen}
        setShowPlatform={setShowPlatform}
        showPlatform={showPlatform}
        displayPlatform={displayPlatform}
      />
      <div
        id="content-wrapper"
        className="App__personalaccount-wrapper non-auth"
      >
        {showPlatform ? (
          <General></General>
        ) : (
          <div
            style={{
              color: "lightGreen",
              marginLeft: "50%",
              marginTop: "20%",
              transform: "translateX(-50%)",
            }}
          >
            <h1>Log in to use app</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
