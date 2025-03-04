import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

document.documentElement.lang = "en";

const rootElement = document.getElementById("root");

function RootComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <StrictMode>
      <>
        {loading ? (
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <App />
        )}
      </>
    </StrictMode>
  );
}

if (rootElement) {
  createRoot(rootElement).render(<RootComponent />);
}
