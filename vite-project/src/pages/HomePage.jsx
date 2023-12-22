import HeaderOld from '../components/headerOurUser/HeaderOld';
import MainForHome from '../components/mains/MainForHome';
import Form from '../components/form/Form'

export default function HomePage() {
  return (
    <div className='wrapper'>
      <HeaderOld/>
      <MainForHome/>
      <Form/>
    </div>
  )
}
