import { useState, useEffect, useRef } from 'react';
import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ScrollToTopBtn } from './Components/Helpers/ScrollToTop';

// MUST-HAVE
// active key not correct with navbar <-> category tabs
// pui engineering
// subsection for all project role section

// PARKING-LOT
// ucre
// capstone

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  const [view, setView] = useState(false);
  const workData = [
    {'suffix': 'design', 'name': 'Design',
      'headline': 'Life is good; design makes it even better.',
      'items': [
      {
        'title': 'Fluffy Focus', 
        'id': 'Fluffy-Focus',
        'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
        'desc': 'Transformational Desktop RPG Against Work-Induced Anxiety',
        'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
      },
      {
        'title': '2Done', 
        'id': '2Done',
        'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
        'desc': 'Gamified to-do list mobile app for procrastination',
        'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
      },
      {
        'title': 'Mindfulness Alchemy', 
        'id': 'Mindfulness-Alchemy',
        'tags': ['Game Design', 'Web Developing', 'Social Computing', 'Mental Health', 'Self-Care'],
        'desc': 'Staying Centered in a Restless World',
        'img': 'https://live.staticflickr.com/65535/53740714969_2ddc44849e_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53740714969_2ddc44849e_b.jpg',
      },
      {
        'title': 'Ford Vision', 
        'id': 'Ford-Vision',
        'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
        'desc': 'Redefining Semi-Autonomous Electric Vehicle Paradigm',
        'img': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53573556154_cdbcf18027_b.jpg',
      },
      {
        'title': 'Giant Eagle Sous Chef', 
        'id': 'Sous-Chef',
        'tags': ['Service Design', 'User Research', 'Giant Eagle', 'Meal Planning'],
        'desc': 'Post-work Meals & Home-cook Starters',
        'img': 'https://live.staticflickr.com/65535/53739446457_a00580cdc8_h.jpg',
        'ph': 'https://live.staticflickr.com/65535/53739446457_bdd4cbf39e_c.jpg',
      },
    ]
    },
    {'suffix': 'research', 'name': 'Research',
    'headline': 'To research is to make known the unknown, and inform our response.',
      'items': [
      {
        'title': 'Petit Mood', 
        'id': 'Petit-Mood',
        'tags': ['HCI', 'UX', 'AR', 'GameDesign', 'MentalHealth'],
        'desc': 'An AR Pet game to relieve university students\' emotions',
        'img': 'https://live.staticflickr.com/65535/52515678782_7a973a13a8_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52515678782_b86ed4f440_m.jpg',
      },
      {
        'title': 'Park Smart, Deliver Fast', 
        'id': 'SLZ',
        'tags': ['User Research', 'City Planing'],
        'desc': 'Pittsburgh Smart Loading Zone Google Map Integration',
        'img': 'https://live.staticflickr.com/65535/53740742939_7933acb0e1_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53740742939_7933acb0e1_b.jpg',
      },]
    },
    {'suffix': 'engineering', 'name': 'Engineering',
    'headline': 'Achieving the impossible; that is engineering.',
      'items': [
      {
        'title': 'Mindfulness Alchemy', 
        'id': 'Mindfulness-Alchemy',
        'tags': ['Game Design', 'Web Developing', 'Social Computing', 'Mental Health', 'Self-Care'],
        'desc': 'Staying Centered in a Restless World',
        'img': 'https://live.staticflickr.com/65535/53740714969_2ddc44849e_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53740714969_2ddc44849e_b.jpg',
      },
      {
        'title': 'TourBot', 
        'id': 'TourBot', 
        'tags': ['DataScience', 'NLP', 'DeepLearning', 'Frontend', 'UI'],
        'desc': 'Task-oriented chatbot for travel recommendation', 
        'img': 'https://live.staticflickr.com/65535/52516160951_2fcbbec56d_k.jpg',
        'ph': 'https://live.staticflickr.com/65535/52516160951_1c09f8b8f1_m.jpg',
      },]
    },
  ];
  const homeData = [
    {'suffix': 'design', 'name': 'Design Projects',
      'items': workData[0]['items'].slice(0, 3)
    },
  ];

  const lifeData = [
    {'suffix': '/Art', 'name': 'Art', 'target': '_self',
    'img': 'https://64.media.tumblr.com/d67f70e908c081ebf6869ac1dd0a4653/2bc0cb1353ea6c46-8e/s2048x3072/e8cee6bed8bc71cc5ee750349d003bb807b61292.jpg'},
    {'suffix': 'https://medium.com/@pwh27design', 'name': 'Writing', 'target': '_blank',
    'img': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ];

  return (
    <div>
      <Header workData={workData} lifeData={lifeData} view={view} setView={setView} />
      <main>
        <Switch homeData={homeData} workData={workData} lifeData={lifeData}
        view={view} setView={setView} />
        {showButton && <ScrollToTopBtn scrollFunc={scrollToTop} />}
        <Footer />
      </main>
      
    </div>
  );
}

export default App;