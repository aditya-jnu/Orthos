import { Route, Routes} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import '@radix-ui/themes/styles.css';
import Logindefault from './pages/Logindefault';
import Otpdefault from "./pages/Otpdefault";
import Footer from './components/Footer';
import Header from './components/Header';
import { Theme } from '@radix-ui/themes';
function App() {
  return (
    <Theme>
      <div className="App" style={{backgroundColor:'#0F141B',color:'white'}}>
       <Header/>
       <Routes>
         <Route path="/orthos" element={<MainHeader/>}>
            <Route index element={<Logindefault/>}/>
            <Route path="/orthos/otp" element={<Otpdefault/>}/>

         </Route> 
       </Routes>
       <div className="fot"><Footer/></div>
       
      </div>
    </Theme>
  );
}
export default App;
