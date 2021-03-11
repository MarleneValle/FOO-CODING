'use strict';

// 1.1 
  let favoriteBooks = [
    'how_to_stop_time',
    'the_no_1_ladies_detective_agency',
    'eleven_minutes',
    '1984',
    'eat_pray_love',
    'the_secret',
    'the_little_prince',
    'animal_farm',
    'the_unbearable_lightness_of_being',
    'the_road_ahead',
  ];

// // 1.4 Object of each book

let books = {
  id1: {
    "title": "How to stop time",
    "language": "English",
    "author": "Matt Haig"
  },

  id2: {
    "title": "The No.1 ladies detective agency",
    "language": "English",
    "author": "Alexander McCall Smith"
  },

  id3: {
    "title": "Eleven minutes",
    "language": "English",
    "author": "Paulo Coelho"
  },
  
  id4: {
    "title": "1984",
    "language": "English",
    "author": "George Orwell"
  },

  id5: {
    "title": "Eat, pray, love",
    "language": "English",
    "author": "Elizabeth Gilbert"
  },

  id6: {
    "title": "The Secret",
    "language": "English",
    "author": "Rhonda Byrne"
  },

  id7: {
    "title": "The little prince",
    "language": "English",
    "author": "Antoine de Saint-Exupery"
  },
 
 id8: {
    "title": "Animal Farm",
    "language": "English",
    "author": "Gorge Orwel"
  },
 
  id9: {
    "title": "The unbearable lightness of being",
    "language": "English",
    "author": "Milan Kundera"
  },

  id10: {
    "title": "The road ahead",
    "language": "English",
    "author": "Bill Gates"
  }
};


// 1.5 

function createBooks(obj) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'books_section');
  for (let key in obj) {
    const bookCard = document.createElement('li');
    bookCard.setAttribute('class', 'book_card');
    bookCard.setAttribute('id', key);

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = obj[key].title;
    bookCard.appendChild(bookTitle);

    const bookLanguage = document.createElement('p');
    bookLanguage.innerHTML = obj[key].language;
    bookCard.appendChild(bookLanguage);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = obj[key].author;
    bookCard.appendChild(bookAuthor);
    ul.appendChild(bookCard);
  }
  console.log(ul);
  document.getElementById('book_list').appendChild(ul);
}
createBooks(books);


//Book cover

let images = {
  id1: {
    "imagsrc": "id1.jpeg",
  }, 
  id2: {
    "imagsrc": "id2.jpeg",
  }, 
  id3: {
    "imagsrc": "id3.jpeg",
  },  
  id4: {
    "imagsrc": "id4.jpeg",
  },  
  id5: {
    "imagsrc": "id5.jpeg",
  },  
  id6: {
    "imagsrc": "id6.jpeg",
  },  
  id7: {
    "imagsrc": "id7.jpeg",
  },  
  id8: {
    "imagsrc": "id8.jpeg",
  },  
  id9: {
    "imagsrc": "id9.jpg",
  },  
  id10: {
    "imagsrc": "id10.jpeg",
  }
};  


function renderBookImage() {
  const imageIDs = Object.keys(images);
  for (let i = 0; i < imageIDs.length; i++) {
    const image_id = imageIDs[i];
    const image = document.createElement('img');
    const li = document.getElementById(image_id);
    image.src = images[image_id].imagsrc;
    li.prepend(image)
    console.log('li');
  
  }
}

renderBookImage();
