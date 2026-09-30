import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
import RouteMain from './09_routeMain/RouteMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Rest from './11_rest/Rest';
import RecoilMain from './10_recoilDiv/RecoilMain';
import Gallery from './08_gallery/Gallery';
import MyRefAdd from './07_myRef/MyRefAdd';
import MyRef from './07_myRef/MyRef';
// import TrafficSelf from './06_traffic/TrafficSelf';
import Traffic from './06_traffic/Traffic';
import Lotto from './05_lotto/Lotto';
// import MyList from './04_myList/MyList';
// import logo from './logo.svg';
// import Hello from './01_example';
import MyClock from './02_clock/MyClock';
// import MyDiv1 from './03_div/MyDiv1';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full min-h-screen mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p>리액트 기초</p>
          <ul className='flex justify-center items-center text-sm'>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/'>시계</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/lotto'>로또</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/traffic'>교통사고</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/add'>더하기</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/gallery'>관광</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/recoil'>Recoil예제</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/rest'>JSON CRUD 예제</Link>
            </li>
          </ul>
          <p><Link to='/'><RiHomeHeartFill /></Link></p>
        </header>
        <main className='grow w-full flex justify-center items-start overflow-y-auto'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/add' element={<MyRefAdd />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/recoil' element={<RecoilMain />} />
            <Route path='/rest' element={<Rest />} />
          </Routes>
       </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          ⓒ Su jin Kim
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
