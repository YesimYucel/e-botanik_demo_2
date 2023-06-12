import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Bitkiler from './routes/bitkiler';
import Footer from './routes/footer';
import Online from './routes/Online';
import Tai from './routes/Tai';
import Ekim from './routes/Ekim';
import Gubreleme from './routes/Gubreleme';
import Hasat from './routes/Hasat';
import Hakkimda from './routes/Hakkimda';



function App() {
  return (  
    <div className="App">

  

    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/bitkiler' element={<Bitkiler/>}></Route>
      <Route path='/Online' element={<Online/>}> </Route>
      <Route path='/Tai' element={<Tai/>}></Route>
      <Route path='/Ekim' element={<Ekim/>}></Route>
      <Route path='/Gubreleme' element={<Gubreleme/>}></Route>
      <Route path='/Hasat' element={<Hasat/>}></Route>
      <Route path='/Hakkimda' element={<Hakkimda/>}></Route>

      </Route>
    </Routes>
<Footer>
  
</Footer>


    </div>
  );
}

export default App;


