import { FormModalProvider } from './context/FormModalContext';
import useScrollReveal from './hooks/useScrollReveal';
import Header from './components/Header';
import RailForm from './components/RailForm';
import Hero from './components/Hero';
// Intro.jsx ya no se usa aquí — su frase ahora vive dentro de HeroInfoStrip
// (el archivo se conserva por si se necesita reutilizar más adelante).
// TeamSplit.jsx y Docentes.jsx ya no se usan aquí — se fusionaron en
// TeamCombined.jsx. Los archivos se conservan por si se necesitan de nuevo.
// import TeamSplit from './components/TeamSplit';
import TeamCombined from './components/TeamCombined';
import MediaVideo from './components/MediaVideo';
// BuildSplit.jsx oculto por ahora — el archivo se conserva por si se necesita de nuevo
// import BuildSplit from './components/BuildSplit';
import Trust from './components/Trust';
import Valoran from './components/Valoran';
import Suena from './components/Suena';
// Temario.jsx oculto por ahora — el archivo se conserva por si se necesita de nuevo
// import Temario from './components/Temario';
import Empleo from './components/Empleo';
// import Docentes from './components/Docentes';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  useScrollReveal();

  return (
    <FormModalProvider>
      <Header />
      <RailForm />
      <Hero />
      {/* <Intro /> — sustituido por HeroInfoStrip dentro de Hero */}
      <TeamCombined />
      <MediaVideo />
      <Valoran />
      <Trust />
      {/* <BuildSplit /> — oculto */}
      <Suena />
      {/* <Temario /> — oculto */}
      <Empleo />
      {/* <Docentes /> — fusionado dentro de TeamCombined */}
      <Signup />
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}