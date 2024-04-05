import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import ReviewScreen from './PercentModel'
import { useSelector } from "react-redux"

function QuizeScreen() {
  const { status } = useSelector((store) => store);
  console.log(status, "quize screen");

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {status == "finish" && <ReviewScreen/>}
    </>
  )
}

export default QuizeScreen
