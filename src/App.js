import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  // États globaux (NOMBRES UNIQUEMENT)
  const [sensitivity, setSensitivity] = useState(30);       // mg/dl / U
  const [glucoseTarget, setGlucoseTarget] = useState(110);  // mg/dl
  const [glucoseMax, setGlucoseMax] = useState(180);        // mg/dl
  const [glucoseMin, setGlucoseMin] = useState(70);         // mg/dl

  const [activeInsulin, setActiveInsulin] = useState(0);
  const [glycemia, setGlycemia] = useState(110); // mg/dl

  const [ratioMatin, setRatioMatin] = useState(1.7);
  const [ratioMidi, setRatioMidi] = useState(1.6);
  const [ratioSoir, setRatioSoir] = useState(1.6);

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Page1
          sensitivity={sensitivity}
          setSensitivity={setSensitivity}
          glucoseTarget={glucoseTarget}
          setGlucoseTarget={setGlucoseTarget}
          glucoseMax={glucoseMax}
          setGlucoseMax={setGlucoseMax}
          glucoseMin={glucoseMin}
          setGlucoseMin={setGlucoseMin}
          ratioMatin={ratioMatin}
          setRatioMatin={setRatioMatin}
          ratioMidi={ratioMidi}
          setRatioMidi={setRatioMidi}
          ratioSoir={ratioSoir}
          setRatioSoir={setRatioSoir}
          activeInsulin={activeInsulin}
          setActiveInsulin={setActiveInsulin}
          glycemia={glycemia}
          setGlycemia={setGlycemia}
        />
      ),
    },
    {
      path: "/page2",
      element: (
        <Page2
          sensitivity={sensitivity}
          glucoseTarget={glucoseTarget}
          glucoseMax={glucoseMax}
          glucoseMin={glucoseMin}
          ratioMatin={ratioMatin}
          ratioMidi={ratioMidi}
          ratioSoir={ratioSoir}
          activeInsulin={activeInsulin}
          glycemia={glycemia}         
      
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

