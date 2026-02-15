import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  // États globaux (NOMBRES UNIQUEMENT)
const [sensitivity, setSensitivity] = useState("");
const [glucoseTarget, setGlucoseTarget] = useState("");
const [glucoseMin, setGlucoseMin] = useState("");
const [glucoseMax, setGlucoseMax] = useState("");
const [ratioMatin, setRatioMatin] = useState("");
const [ratioMidi, setRatioMidi] = useState("");
const [ratioSoir, setRatioSoir] = useState("");
const [activeInsulin, setActiveInsulin] = useState("");
const [glycemia, setGlycemia] = useState("");


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

