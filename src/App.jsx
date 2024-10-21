import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";

import Techpage from "./pages/Techpage";
import Education from "./pages/Education";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/tech" element={<Techpage />} />
        <Route path="/edu" element={<Education />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
