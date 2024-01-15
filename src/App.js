import { useState } from 'react';
import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  const [view, setView] = useState(false);
  const homeData = [
    {'suffix': 'UX', 'name': 'Design Projects',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['HCI', 'UX', 'AR', 'GameDesign', 'MentalHealth'],
        'desc': 'An AR Pet game to relieve university students\' emotions.',
        'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      {
        'title': 'Mindful Diary',
        'id': 'Mindful-Diary',
        'tags': ['UI', 'Diary', 'Habituation', 'MentalHealth'], 
        'desc': 'Guided journal application to understand your mind.',
        'img': 'https://live.staticflickr.com/65535/52516425824_fe9e2f38eb_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516425824_12072e6f9b_m.jpg',
      },]
    },
  ];
  const workData = [
    {'suffix': 'UX', 'name': 'UX Design',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['HCI', 'UX', 'AR', 'GameDesign', 'MentalHealth'],
        'desc': 'An AR Pet game to relieve university students\' emotions.',
        'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      {
        'title': 'Bookworm Meeter', 
        'id': 'Bookworm-Meeter',
        'tags': ['DesignThinking', 'UI', 'SocialAPP', 'Reading'],
        'desc': 'The social networking platform for introverted bookworms.',
        'img': 'https://live.staticflickr.com/65535/52516423519_c9e86789fa_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516423519_8b1230a857_m.jpg',
      },
      {
        'title': 'Mindful Diary',
        'id': 'Mindful-Diary',
        'tags': ['UI', 'Diary', 'Habituation', 'MentalHealth'], 
        'desc': 'Guided journal application to understand your mind.',
        'img': 'https://live.staticflickr.com/65535/52516425824_fe9e2f38eb_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516425824_12072e6f9b_m.jpg',
      },]
    },
    {'suffix': 'Engineering', 'name': 'Engineering / Data Science',
      'items': [
      {
        'title': 'TourBot', 
        'id': 'TourBot', 
        'tags': ['DataScience', 'NLP', 'DeepLearning', 'Frontend', 'UI'],
        'desc': 'Task-oriented chatbot for travel recommendation.', 
        'img': 'https://live.staticflickr.com/65535/52516160951_2fcbbec56d_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516160951_1c09f8b8f1_m.jpg',
      },]
    },
  
   
];

  return (
    <div>
      <Header workData={workData} lifeData={workData} view={view} setView={setView} />
      <Switch data={homeData} view={view} setView={setView} />
      <Footer />
    </div>
  );
}

export default App;

// TODO: add page transition 