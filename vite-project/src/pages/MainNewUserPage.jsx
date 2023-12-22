import HeaderNew from '../components/headerNewUser/HeaderNew';
import MainForMain from '../components/mains/MainForMain';
import Footer from '../components/footer/Footer';

export default function MainNewUserPage() {
  return (
    <div className="wrapper">
        <HeaderNew/>
      <div className='container'>
        <MainForMain/>
      </div>
        <Footer/>
    </div>
  )
}