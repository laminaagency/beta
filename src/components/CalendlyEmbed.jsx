import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/lamina-digital-info/15min?primary_color=1a1a1a"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default CalendlyEmbed;
