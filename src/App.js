import { useState, useEffect, useRef } from 'react';
import Switch from './Components/Switch';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ScrollToTopBtn } from './Components/Helpers/ScrollToTop';

// MUST-HAVE
// subsection for Petit Mood / TourBot
// background blur for mobile mode
// intro screen block
// hero page animation
// self-intro
// Fluffy UI
// Vision mockup + large size mockups *N
// remove 2Done

// NICE-TO-HAVE
// about: life in the dropdown
// art / writing section in about page
// check rwd

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [view, setView] = useState(false);

  useEffect(() => {
    // set height for intersection observer
    setPageHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
    // scroll to top button
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const workData = [
    {'suffix': 'design', 'name': 'Design',
      'headline': 'Life is good; design makes it even better.',
      'items': [
      {
        'title': 'FairPlay', 
        'id': 'Fairplay',
        'tags': ['Product Design', 'App Design', 'Consumer Products', 'Advocacy'],
        'desc': 'Your AI Advocate for All Things Customer Service',
        'img': 'https://i.imgur.com/RcjjaFq.png',
        'ph': 'https://i.imgur.com/RcjjaFq.png',
      },
      {
        'title': 'Vision', 
        'id': 'Vision',
        'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
        'desc': 'Easy, Delightful Beginner\'s E-moped Experience',
        'img': 'https://i.imgur.com/tCWNnCe.png',
        'ph': 'https://i.imgur.com/tCWNnCe.png',
      },
      {
        'title': 'Fluffy Focus', 
        'id': 'Fluffy-Focus',
        'tags': ['Persuasive Design', 'Behavior Change', 'Game Design', 'UX', 'Psychology'],
        'desc': 'Transformational Desktop RPG Against Work-Induced Anxiety',
        'img': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53567884525_c169b9e51c_b.jpg',
      },
    ]
    },
    {'suffix': 'engineering', 'name': 'Engineering',
    'headline': 'Achieving the impossible; that is engineering.\n(Yes, I coded this website too.)',
      'items': [
      {
        'title': 'Mindfulness Alchemy', 
        'id': 'Mindfulness-Alchemy',
        'tags': ['Game Design', 'Web Developing', 'Social Computing', 'Mental Health', 'Self-Care'],
        'desc': 'Web 3D Role-playing Game of Self-care Practice',
        'img': 'https://live.staticflickr.com/65535/53802328958_a5fd4d9f27_b.jpg',
        'ph': 'https://live.staticflickr.com/65535/53802328958_a5fd4d9f27_b.jpg',
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
  ];
  const homeData = [
    {'suffix': 'design', 'name': 'I champion users with empathy and a focus on details,',
      'items': workData[0]['items'].slice(0, 2)
    },
    {'suffix': 'engineering', 'name': '... And leverage my coding skills to bring designs to life.',
      'items': workData[1]['items'].slice(0, 1)
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
        view={view} setView={setView} pageHeight={pageHeight} />
        {showButton && <ScrollToTopBtn scrollFunc={scrollToTop} />}
        <Footer />
      </main>
      
    </div>
  );
}

export default App;