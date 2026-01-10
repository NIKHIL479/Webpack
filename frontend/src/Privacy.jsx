import React, { useState, useEffect } from "react";

export const Privacy = () => {
 const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  //rate limiting technique
  // Wait before updating debouncedText
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 2000); // wait 500ms

    return () => {console.log("Clearing timeout:", timer); clearTimeout(timer); };
  }, [text]);

  // Call API only once
  useEffect(() => {
    if (debouncedText) {
     console.log("API called with:", debouncedText);
    }
  }, [debouncedText]);

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default Privacy;