import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const data = [
    {'suffix': 'UXUI', 'name': 'UX/UI Design',
      'items': [
      {
        'title': 'Petit Mood', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': '../img/UXUI/Book/cover.jpg',
      },
      {
        'title': '2Done', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Bookworm Meeter', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
        'workId': 'Petit-Mood',
      },
      {
        'title': 'Mindful Diary', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Frontend', 'name': 'Frontend Developing',
      'items': [
      {
        'title': 'TourBot', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'EasyManager', // 系羽 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals',
      'items': [
      {
        'title': 'NTU Academic Counseling', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'IMDB: NTU-IM Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Poster', 'name': 'Poster Design',
      'items': [
      {
        'title': 'Les Saisons', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'New Era',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'FREE',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Vegan Is the New Black',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Event-Visuals', 'name': 'Event Visuals',
      'items': [
      {
        'title': 'Fireworks: NTU-IM Night', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'SSWIM: Orientation Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'UnlIMted: NTU-IM Week',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'IMDB: NTU-IM Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Editorial-Print', 'name': 'Editorials & Prints',
      'items': [
      {
        'title': 'Mindfulness', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Music',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'NTU-IM Graduation Book',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Elite Camp Brochure',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    // {'suffix': 'Photagraphy', 'name': 'Photagraphy'},
];

  return (
    <div>
      <Header data={data}/>
      <Switch data={data} />
      <Footer />
    </div>
  );
}

export default App;

// TODO: add page transition
