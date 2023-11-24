import React from "react";
import Snowfall from "react-snowfall";

function SnowScript() {
  return (
    <div className="snow-script-container">
      <Snowfall
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
        snowflakeCount={200}
      />
    </div>
  );
}

export default SnowScript;
