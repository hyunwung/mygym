import './App.css';
import './assets/Global.scss'
import Header from './components/header/Header';
import Slogan from './components/slogan/Slogan';

const MyGym = () => {
  return (
    <div className="MyGym">
      <Header></Header>
      <Slogan></Slogan>
    </div>
  );
}

export default MyGym;
