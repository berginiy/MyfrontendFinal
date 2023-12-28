import HeaderNew from '../components/headerNewUser/HeaderNew';
import MainForHome from '../components/mains/MainForHome';
import Form from '../components/form/Form'

export default function HomePage() {
  return (
    <div className='wrapper'>
      <HeaderNew/>
      <MainForHome/>
      <Form/>
    </div>
  )
}
