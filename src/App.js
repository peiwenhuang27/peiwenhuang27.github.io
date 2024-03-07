import { useState } from 'react';
import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';

// PROBLEM
// subtitle too big??
// inspect the whole design system
// sidebar navigation
// header/footer no container

function App() {
  const [view, setView] = useState(false);
  const homeData = [
    {'suffix': 'design', 'name': 'Design Projects',
      'items': [
      {
          'title': 'Fluffy Focus', 
          'id': 'Fluffy-Focus',
          'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
          'desc': 'Transformational Mobile RPG Against Work-Induced Anxiety',
          'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
          'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
      },
      {
        'title': 'Ford Vision', 
        'id': 'Ford-Vision',
        'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
        'desc': 'Defining Semi-Autonomous Electric Vehicle Paradigm',
        'img': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
        'desc': 'A gamified to-do list tackling procrastination.',
        'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      ]
    },
  ];
  const workData = [
    {'suffix': 'design', 'name': 'Design',
      'headline': 'Life is good; design makes it even better.',
      'items': [
      {
        'title': 'Fluffy Focus', 
        'id': 'Fluffy-Focus',
        'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
        'desc': 'Transformational Mobile RPG Against Work-Induced Anxiety',
        'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
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
    {'suffix': 'research', 'name': 'Research',
    'headline': 'To research is to make known the unknown, and inform our response.',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['HCI', 'UX', 'AR', 'GameDesign', 'MentalHealth'],
        'desc': 'An AR Pet game to relieve university students\' emotions.',
        'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },]
    },
    {'suffix': 'engineering', 'name': 'Engineering',
    'headline': 'Achieving the impossible; that is engineering.',
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
  const lifeData = [
    {'suffix': '/Art', 'name': 'Art', 
    'img': 'https://64.media.tumblr.com/d67f70e908c081ebf6869ac1dd0a4653/2bc0cb1353ea6c46-8e/s2048x3072/e8cee6bed8bc71cc5ee750349d003bb807b61292.jpg'},
    {'suffix': 'writingMediumURL', 'name': 'Writing', 
    'img': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ];

  return (
    <div>
      <Header workData={workData} lifeData={lifeData} view={view} setView={setView} />
      <Switch homeData={homeData} workData={workData} lifeData={lifeData} view={view} setView={setView} />
      <Footer />
    </div>
  );
}

export default App;