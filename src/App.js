import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Submit from "./components/Submit";
import HotelBook from "./pages/HotelBook";
import AvailabilityV2 from "./pages/AvailabilityV2";
import HotelActivitiesBoatTour from "./pages/HotelActivitiesBoatTour";
import HotelActivitiesBoatTourExp from "./pages/HotelActivitiesBoatTourExp";
import HotelActivitiesMain from "./pages/HotelActivitiesMain";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-book":
        title = "";
        metaDescription = "";
        break;
      case "/availability-v2":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-activities-boat-tour":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-activities-boat-tour-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-activities-main":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel-book" element={<HotelBook />} />
      <Route path="/availability-v2" element={<AvailabilityV2 />} />
      <Route
        path="/hotel-activities-boat-tour"
        element={<HotelActivitiesBoatTour />}
      />
      <Route
        path="/hotel-activities-boat-tour-expanded"
        element={<HotelActivitiesBoatTourExp />}
      />
      <Route path="/hotel-activities-main" element={<HotelActivitiesMain />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}
export default App;
