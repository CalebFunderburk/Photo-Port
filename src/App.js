import React, { useState } from 'react';
import About from './componets/About'
import Nav from './componets/Nav'
import Gallery from './componets/Gallery';
import ContactForm from './componets/Contact'

function App() {

  const [contactSelected, setContactSelected] = useState(false)

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects'
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouse, waterfalls, and the beauty of nature' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
      }
      </main>
    </div>
  );
}

export default App;