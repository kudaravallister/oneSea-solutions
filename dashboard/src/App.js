import "./assets/css/global.css";
import "./assets/css/fonts/fonts.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Announcements from "./components/Announcements";
import QuickLinks from "./components/QuickLinks";
import MeetYourColleagues from "./components/MeetYourColleagues";
import Policies from "./components/Policies";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="App">
      <Header />
      <article className="app_width">
        <div className="container flex gap20 p-10">
          <Banner />
          <Announcements />
        </div>
        <QuickLinks />
        <div className="container gap20 p-10">
          <MeetYourColleagues />
          <Policies />
        </div>
      </article>
      <Footer />
    </section>
  );
}

export default App;
