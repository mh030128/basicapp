import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
import Traffic from './06_traffic/Traffic';
// import Lotto from './05_lotto/Lotto';
// import MyList from './04_myList/MyList';
//import logo from './logo.svg';
//import Hello from './01_example';
// import MyClock from './02_clock/MyClock';
// import MyDiv1 from './03_div/MyDiv1';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>리액트 기초</p>
        <p><RiHomeHeartFill /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        <Traffic />
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Su jin Kim
      </footer>
    </div>
  );
}

export default App;
