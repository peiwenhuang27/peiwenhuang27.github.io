import { useState } from 'react';
import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  const [view, setView] = useState(false);
  const data = [
    {'suffix': 'UXUI', 'name': 'UX/UI Design',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['tag1', 'tag2'], 
        'desc': 'An AR Pet game to relieve university students\' emotions.',
        'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['tag1', 'tag2'], 
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      {
        'title': 'Bookworm Meeter', 
        'id': 'Bookworm-Meeter',
        'tags': ['tag1', 'tag2'], 
        'desc': 'The social networking platform for introverted bookworms.',
        'img': 'https://live.staticflickr.com/65535/52516423519_c9e86789fa_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516423519_8b1230a857_m.jpg',
      },
      {
        'title': 'Mindful Diary',
        'id': 'Mindful-Diary',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Guided journal application to understand your mind.',
        'img': 'https://live.staticflickr.com/65535/52516425824_fe9e2f38eb_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516425824_12072e6f9b_m.jpg',
      },]
    },
    {'suffix': 'DataScience-SystemDesign', 'name': 'Data Science & System Design',
      'items': [
      {
        'title': 'TourBot', 
        'id': 'TourBot', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Task-oriented chatbot for travel recommendation.',
        'img': 'https://live.staticflickr.com/65535/52516160951_2fcbbec56d_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516160951_1c09f8b8f1_m.jpg',
      },
      {
        'title': 'Name-Entity Classification', 
        'id': 'Name-Entity-Classification', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Predicting nationality, ethnicity, and gender by name.',
        'img': 'https://unsplash.com/photos/8hgmG03spF4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTcwMzc5&force=true&w=1920',
        'ph': 'https://unsplash.com/photos/8hgmG03spF4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTcwMzc5&force=true&w=640',
      },
      {
        'title': 'EasyManager', // 系羽 
        'id': 'EasyManager',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Account/point management system for a sport team.',
        'img': 'https://live.staticflickr.com/65535/52516708823_aaf0e9bd18_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516708823_be717f02d0_m.jpg',
      },
      {
        'title': 'Classifying True & Fake News', 
        'id': 'Classifying-True-n-Fake-News', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'A problem more than classification.',
        'img': 'https://unsplash.com/photos/I79wWVFyhEQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTY5ODMx&force=true&w=1920',
        'ph': 'https://unsplash.com/photos/I79wWVFyhEQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTY5ODMx&force=true&w=640',
      },]
    },
    {'suffix': 'Web-Visuals', 'name': 'Web Visuals',
      'items': [
      {
        'title': 'NTU Academic Counseling', 
        'id': 'NTU-Academic-Counseling', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Website visuals of NTU Academic Counseling Services.',
        'img': 'https://live.staticflickr.com/65535/52516211291_2bd7d52613_k.jpg',
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
        'img': 'https://live.staticflickr.com/65535/52505254991_f45213c95a_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505254991_4ba25b7ba7_m.jpg',
      },
      {
        'title': 'NTU IM Graduation Book',
        'id': 'NTU-IM-Graduation-Book',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Graduation book design for NTU IM Class of 2022.',
        'img': 'https://live.staticflickr.com/65535/52505254131_410030857d_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505254131_83c1f429ea_m.jpg',
      },
      {
        'title': 'Mindfulness', 
        'id': 'Mindfulness', 
        'tags': ['tag1', 'tag2'], 
        'desc': 'Book Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768682_b61c6af4b7_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52504768682_3212bbbd24_m.jpg',
      },
      {
        'title': 'Music',
        'id': 'Music',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Magazine Cover Design.',
        'img': 'https://live.staticflickr.com/65535/52504768712_4d0d282010_h.jpg',
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
        'img': 'https://live.staticflickr.com/65535/52505805268_0b80a2f116_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505805268_6ea233f233_m.jpg',
      },
      {
        'title': 'New Era',
        'id': 'New-Era',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Surreal sci-fi poster design.',
        'img': 'https://live.staticflickr.com/65535/52505805468_f6c2036389_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505805468_616a430413_m.jpg',
      },
      {
        'title': 'FREE',
        'id': 'FREE',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Kaleidoscope-like poster design.',
        'img': 'https://live.staticflickr.com/65535/52505520319_b4d8d3f74e_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505520319_70b92872c8_m.jpg',
      },
      {
        'title': 'Vegan Is the New Black',
        'id': 'Vegan-Is-the-New-Black',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Healthy diet promotion poster.',
        'img': 'https://live.staticflickr.com/65535/52505520719_e168f530cc_h.jpg',
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
        'img': 'https://live.staticflickr.com/65535/52505936586_3ab500a117_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/52505936586_2e0a5dfc84_m.jpg',
      },
      {
        'title': 'SSWIM: Orientation Camp',
        'id': 'SSWIM--Orientation-Camp',
        'tags': ['tag1', 'tag2'], 
        'desc': 'Joint camp held for NTU freshmen from 3 majors.',
        'img': 'https://live.staticflickr.com/65535/52505951201_20cca57977_h.jpg',
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
      <Header data={data} view={view} setView={setView} />
      <Switch data={data} view={view} setView={setView} />
      <Footer />
    </div>
  );
}

export default App;

// TODO: add page transition 