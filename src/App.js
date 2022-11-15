import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {

  const data = [
    {'suffix': 'UXUI', 'name': 'UX/UI Design',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['tag1', 'tag2'], 
        'desc': 'An AR Pet game to relieve university students\' emotions.',
        'img': '/works/UXUI/petit-mood/cover.png',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['tag1', 'tag2'], 
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': '/works/UXUI/2done/cover.png',
      },
      {
        'title': 'Bookworm Meeter', 
        'id': 'Bookworm-Meeter',
        'tags': ['tag1', 'tag2'], 
        'desc': 'The social networking platform for introverted bookworms.',
        'img': '/works/UXUI/bookworm/cover.png',
      },
      {
        'title': 'Mindful Diary',
        'id': 'Mindful-Diary',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Guided journal application to understand your mind.',
        'img': '/works/UXUI/mindful/cover.png',
      },]
    },
    {'suffix': 'Frontend', 'name': 'Frontend Developing',
      'items': [
      {
        'title': 'TourBot', 
        'id': 'TourBot', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'EasyManager', // 系羽 
        'id': 'EasyManager',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals',
      'items': [
      {
        'title': 'NTU Academic Counseling', 
        'id': 'NTU-Academic-Counseling', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'IMDB: NTU IM Camp',
        'id': 'IMDB-NTU-IM-Camp-Web',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Poster', 'name': 'Poster Design',
      'items': [
      {
        'title': 'Les Saisons', 
        'id': 'Les-Saisons', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'New Era',
        'id': 'New-Era',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'FREE',
        'id': 'FREE',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Vegan Is the New Black',
        'id': 'Vegan-Is-the-New-Black',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Event-Visuals', 'name': 'Event Visuals',
      'items': [
      {
        'title': 'Fireworks: NTU IM Night',
        'id':  'Fireworks-NTU-IM-Night',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'SSWIM: Orientation Camp',
        'id': 'SSWIM-Orientation-Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'UnlIMted: NTU IM Week',
        'id': 'UnlIMted-NTU-IM-Week',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'IMDB: NTU IM Camp',
        'id': 'IMDB-NTU-IM-Camp-Event',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },]
    },
    {'suffix': 'Editorial-Print', 'name': 'Editorials & Prints',
      'items': [
      {
        'title': 'Mindfulness', 
        'id': 'Mindfulness', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Music',
        'id': 'Music',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'NTU IM Graduation Book',
        'id': 'NTU-IM-Graduation-Book',
        'tags': ['tag1', 'tag2'], 
        'desc': 'This is a description.',
        'img': 'src/img/UXUI/Book/cover.jpg',
      },
      {
        'title': 'Elite Camp Brochure',
        'id': 'Elite-Camp-Brochure',
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
