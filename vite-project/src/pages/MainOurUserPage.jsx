import HeaderOld from '../components/headerOurUser/HeaderOld';
import MainForMain from '../components/mains/MainForMain';
import Footer from '../components/footer/Footer';

export default function MainOurUserPage() {
  return (
    <div className='wrapper'>
        <HeaderOld/>
      <div className='container'>
        <MainForMain/>
      </div>
      <Footer/>
    </div>
  )
}
