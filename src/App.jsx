import { FormModalProvider } from './context/FormModalContext';
import Header from './components/Header';
import RailForm from './components/RailForm';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Intro from './components/Intro';
import TeamSplit from './components/TeamSplit';
import MediaVideo from './components/MediaVideo';
import BuildSplit from './components/BuildSplit';
import Valoran from './components/Valoran';
import Suena from './components/Suena';
import Temario from './components/Temario';
import Empleo from './components/Empleo';
import Docentes from './components/Docentes';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  return (
    <FormModalProvider>
      <Header />
      <RailForm />
      <Hero />
      <Trust />
      <Intro />
      <TeamSplit />
      <MediaVideo />
      <BuildSplit />
      <Valoran />
      <Suena />
      <Temario />
      <Empleo />
      <Docentes />
      <Signup />
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}