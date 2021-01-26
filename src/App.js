
import './App.css';
import Adress from './Components/Profile/Adress'
import FullName from './Components/Profile/FullName'
import ProfilPhoto from './Components/Profile/ProfilPhoto'



function App() {
  return (
    <div className="App">
      <div className="profile">
      <ProfilPhoto/>
      <div className="desc"> 
      <FullName/>
      <Adress/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
