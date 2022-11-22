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
        'ph': ','
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
        'desc': 'Task-oriented chatbot for travel recommendation.',
        'img': '/works/Frontend/tourbot/cover.png',
      },
      {
        'title': 'EasyManager', // 系羽 
        'id': 'EasyManager',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Account/point management system for a sport team.',
        'img': '/works/Frontend/easymanager/cover.png',
      },]
    },
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals',
      'items': [
      {
        'title': 'NTU Academic Counseling', 
        'id': 'NTU-Academic-Counseling', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Website visuals of NTU Academic Counseling Services.',
        'img': '/works/Web/ntu-academic/cover.png',
      },
      // {
      //   'title': 'IMDB: NTU IM Camp',
      //   'id': 'IMDB-NTU-IM-Camp-Web',
      //   'tags': ['tag1', 'tag2'], 
      //   'desc': 'This is a description.',
      //   'img': 'https://live.staticflickr.com/65535/52504771272_c9ae575513_k.jpg',
      // }
      ]
    },
    {'suffix': 'Editorial-Print', 'name': 'Editorials & Prints',
      'items': [
      {
        'title': 'Elite Camp Brochure',
        'id': 'Elite-Camp-Brochure',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Publication for 18th NTU x PKU Elite Camp.',
        'img': 'https://live.staticflickr.com/65535/52505254991_f45213c95a_h.jpg',
      },
      {
        'title': 'NTU IM Graduation Book',
        'id': 'NTU-IM-Graduation-Book',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Graduation book design for NTU IM Class of 2022.',
        'img': 'https://live.staticflickr.com/65535/52505254131_1829f61a92_k.jpg',
      },
      {
        'title': 'Mindfulness', 
        'id': 'Mindfulness', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Book Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768682_1880429a5b_k.jpg',
      },
      {
        'title': 'Music',
        'id': 'Music',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Magazine Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768712_45f044d13d_k.jpg',
      },
      ]
    },
    {'suffix': 'Poster', 'name': 'Poster Design',
      'items': [
      {
        'title': 'Les Saisons', 
        'id': 'Les-Saisons', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Collection of collage design posters.',
        'img': 'https://live.staticflickr.com/65535/52505805268_7fce1ebdc9_k.jpg',
      },
      {
        'title': 'New Era',
        'id': 'New-Era',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Surreal sci-fi poster design.',
        'img': 'https://live.staticflickr.com/65535/52505805468_8e26ceb65e_k.jpg',
      },
      {
        'title': 'FREE',
        'id': 'FREE',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Kaleidoscope-like poster design.',
        'img': 'https://live.staticflickr.com/65535/52505520319_656134774d_k.jpg',
      },
      {
        'title': 'Vegan Is the New Black',
        'id': 'Vegan-Is-the-New-Black',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Healthy diet promotion poster.',
        'img': 'https://live.staticflickr.com/65535/52505520719_3c9b2793c2_k.jpg',
      },]
    },
    {'suffix': 'Event-Visuals', 'name': 'Event Visuals',
      'items': [
      {
        'title': 'Fireworks: NTU IM Night',
        'id':  'Fireworks--NTU-IM-Night',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Designing for annual performance- 2020 NTU IM Night.',
        'img': 'https://live.staticflickr.com/65535/52505936586_9dd5f32352_k.jpg',
      },
      {
        'title': 'SSWIM: Orientation Camp',
        'id': 'SSWIM--Orientation-Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Joint camp held for NTU freshmen from 3 majors.',
        'img': 'https://live.staticflickr.com/65535/52505951201_745d16f0cf_k.jpg',
      },
      {
        'title': 'UnlIMted: NTU IM Week',
        'id': 'UnlIMted--NTU-IM-Week',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Students-held event for promoting the IM department.',
        'img': 'https://live.staticflickr.com/65535/52505948056_db90c20dbe_k.jpg',
      },
      // {
      //   'title': 'IMDB: NTU IM Camp',
      //   'id': 'IMDB-NTU-IM-Camp-Event',
      //   'tags': ['tag1', 'tag2'], 
      //   'desc': 'This is a description.',
      //   'img': 'https://live.staticflickr.com/65535/52506491998_65d1511159_k.jpg',
      // },
      ]
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