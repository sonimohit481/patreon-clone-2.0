import { Route, Routes, useParams } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import CreatorHome from "./pages/dashboard/Creator/CreatorHome";
import Home from "./pages/main/Home";
import { AllPlansComponents } from "./pages/products/AllPlansComponents";
import Pricing from "./pages/pricing/Pricing"
import Lite from "./pages/products/Lite";
import Premium from "./pages/products/Premium";
import Pro from "./pages/products/Pro";
import { EditPage } from "./pages/creators/edit/EditPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MembershipPage } from "./pages/patron/membership/MembershipPage";
import Video from "./pages/creators/Video";
import Podcast from "./pages/creators/Podcast";
import Music from "./pages/creators/Music";
import VisualArtist from "./pages/creators/VisualArtist";
import Community from "./pages/creators/Community";
import Writing from "./pages/creators/Writing";
import Gaming from "./pages/creators/Gaming";
import Nonprofits from "./pages/creators/Nonprofits";
import Toturial from "./pages/creators/Toturial";
import LocalBisnesses from "./pages/creators/LocalBisnesses";
import { Payments } from "./components/Payments";
import Payouts from "./components/Dashboard/Payouts";
import { CreatePost } from "./pages/creators/create/CreatePost";
import { useSelector } from "react-redux";
import PatronHome from "./pages/dashboard/Patron/PatronHome";
function App() {
  const { token } = useSelector(state => state.auth);

  return (
   <>
        {
        //This Will Not show Navbar at payment page as we have sidebar on payment page 
         !token?
        <Navbar />
        :
        <></>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products/lite" element={<Lite />} />
        <Route path="/products/premium" element={<Premium />} />
        <Route path="/products/pro" element={<Pro />} />
        <Route path="/creatorhome" element={<CreatorHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="Podcast" element={<Podcast />} />
        <Route path="Music" element={<Music />} />
        <Route path="Video" element={<Video />} />
        <Route path="VisualArtist" element={<VisualArtist />} />
        <Route path="Community" element={<Community />} />
        <Route path="Writing" element={<Writing />} />
        <Route path="Gaming" element={<Gaming />} />
        <Route path="Nonprofits" element={<Nonprofits />} />
        <Route path="Toturial" element={<Toturial />} />
        <Route path="LocalBisnesses" element={<LocalBisnesses />} />
        <Route path="/patronHome" element={<PatronHome />} />
      </Routes>
      {
        //This Will Not show Navbar at payment page as we have sidebar on payment page 
        !token &&
        <Footer />
      }
    </>
  );
}

export default App;

