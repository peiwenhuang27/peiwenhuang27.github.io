import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './scss/main.scss';

function App() {

  const data = [
    {'suffix': 'UXUI', 'name': 'UX/UI Design'},
    {'suffix': 'Frontend', 'name': 'Frontend Developing'},
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals'},
    {'suffix': 'Poster', 'name': 'Poster Design'},
    {'suffix': 'Event-Visuals', 'name': 'Event Visuals'},
    {'suffix': 'Editorial-Print', 'name': 'Editorials & Prints'},
    {'suffix': 'Photagraphy', 'name': 'Photagraphy'},
];

  return (
    <div>
      <Header />
      <Switch data={data} />
      <Footer />
    </div>
  );
}

export default App;
