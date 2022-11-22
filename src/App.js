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
        'img': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['tag1', 'tag2'], 
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      {
        'title': 'Bookworm Meeter', 
        'id': 'Bookworm-Meeter',
        'tags': ['tag1', 'tag2'], 
        'desc': 'The social networking platform for introverted bookworms.',
        'img': 'https://live.staticflickr.com/65535/52516423519_8b1230a857_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516423519_8b1230a857_m.jpg',
      },
      {
        'title': 'Mindful Diary',
        'id': 'Mindful-Diary',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Guided journal application to understand your mind.',
        'img': 'https://live.staticflickr.com/65535/52516425824_12072e6f9b_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516425824_12072e6f9b_m.jpg',
      },]
    },
    {'suffix': 'Frontend', 'name': 'Applied Data Science',
      'items': [
      {
        'title': 'TourBot', 
        'id': 'TourBot', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Task-oriented chatbot for travel recommendation.',
        'img': 'https://live.staticflickr.com/65535/52516160951_1c09f8b8f1_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516160951_1c09f8b8f1_m.jpg',
      },
      {
        'title': 'EasyManager', // 系羽 
        'id': 'EasyManager',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Account/point management system for a sport team.',
        'img': 'https://live.staticflickr.com/65535/52516708823_be717f02d0_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516708823_be717f02d0_m.jpg',
      },]
    },
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals',
      'items': [
      {
        'title': 'NTU Academic Counseling', 
        'id': 'NTU-Academic-Counseling', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Website visuals of NTU Academic Counseling Services.',
        'img': 'https://live.staticflickr.com/65535/52516211291_4dc272e913_c.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516211291_4dc272e913_m.jpg',
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
        'img': 'https://live.staticflickr.com/65535/52505254991_4ba25b7ba7_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505254991_4ba25b7ba7_m.jpg',
      },
      {
        'title': 'NTU IM Graduation Book',
        'id': 'NTU-IM-Graduation-Book',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Graduation book design for NTU IM Class of 2022.',
        'img': 'https://live.staticflickr.com/65535/52505254131_83c1f429ea_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505254131_83c1f429ea_m.jpg',
      },
      {
        'title': 'Mindfulness', 
        'id': 'Mindfulness', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Book Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768682_3212bbbd24_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52504768682_3212bbbd24_m.jpg',
      },
      {
        'title': 'Music',
        'id': 'Music',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Magazine Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768712_a0bcf5483d_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52504768712_a0bcf5483d_m.jpg',
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
        'img': 'https://live.staticflickr.com/65535/52505805268_6ea233f233_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505805268_6ea233f233_m.jpg',
      },
      {
        'title': 'New Era',
        'id': 'New-Era',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Surreal sci-fi poster design.',
        'img': 'https://live.staticflickr.com/65535/52505805468_616a430413_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505805468_616a430413_m.jpg',
      },
      {
        'title': 'FREE',
        'id': 'FREE',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Kaleidoscope-like poster design.',
        'img': 'https://live.staticflickr.com/65535/52505520319_70b92872c8_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505520319_70b92872c8_m.jpg',
      },
      {
        'title': 'Vegan Is the New Black',
        'id': 'Vegan-Is-the-New-Black',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Healthy diet promotion poster.',
        'img': 'https://live.staticflickr.com/65535/52505520719_3045639792_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505520719_3045639792_m.jpg',
      },]
    },
    {'suffix': 'Event-Visuals', 'name': 'Event Visuals',
      'items': [
      {
        'title': 'Fireworks: NTU IM Night',
        'id':  'Fireworks--NTU-IM-Night',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Designing for annual performance- 2020 NTU IM Night.',
        'img': 'https://live.staticflickr.com/65535/52505936586_2e0a5dfc84_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505936586_2e0a5dfc84_m.jpg',
      },
      {
        'title': 'SSWIM: Orientation Camp',
        'id': 'SSWIM--Orientation-Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Joint camp held for NTU freshmen from 3 majors.',
        'img': 'https://live.staticflickr.com/65535/52505951201_e46c9d6815_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505951201_e46c9d6815_m.jpg',
      },
      {
        'title': 'UnlIMted: NTU IM Week',
        'id': 'UnlIMted--NTU-IM-Week',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Students-held event for promoting the IM department.',
        'img': 'https://live.staticflickr.com/65535/52505948056_c53a983baa_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505948056_c53a983baa_m.jpg',
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