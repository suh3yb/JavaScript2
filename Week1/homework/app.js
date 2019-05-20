'use strict';

{
  // create places where lists will be added into
  const navigator = document.getElementsByClassName('navigator');
  const mainSection = document.getElementsByClassName('main');

  // an array containing book ids
  const bookTitles = [
    'harry_potter_philosophers_stone',
    'harry_potter_chamber_secrets',
    'harry_potter_prisoner_azkaban',
    'harry_potter_goblet_fire',
    'harry_potter_order_phoenix',
    'harry_potter_halfblood_prince',
    'harry_potter_deathly_hallows',
    'tales_beedle_bard',
    'fantastic_beasts',
    'quidditch_through_ages',
  ];

  // create a list from array
  function makeListFromArray(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);

      li.addEventListener('click', function() {
        window.location.href = '#list-item-' + i;
      });
    }
    return ul;
  }

  // put the list created from array into navigator section
  let newList = makeListFromArray(bookTitles);
  navigator[0].appendChild(newList);

  // an array containing detailed info about books
  const bookDetailed = {
    harry_potter_philosophers_stone: {
      title: "Harry Potter and the Philosopher's Stone",
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_chamber_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_prisoner_azkaban: {
      title: 'Harry Potter and the Prisoner of Azkaban',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_goblet_fire: {
      title: 'Harry Potter and the Goblet of Fire',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_order_phoenix: {
      title: 'Harry Potter and the Order of the Phoenix',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_halfblood_prince: {
      title: 'Harry Potter and the Half-Blood Prince',
      language: 'English',
      author: 'J.K. Rowling',
    },
    harry_potter_deathly_hallows: {
      title: 'Harry Potter and the Deathly Hallows',
      language: 'English',
      author: 'J.K. Rowling',
    },
    tales_beedle_bard: {
      title: 'The Tales of Beedle the Bard',
      language: 'English',
      author: 'J.K. Rowling',
    },
    fantastic_beasts: {
      title: 'Fantastic Beast and Where to Find Them',
      language: 'English',
      author: 'J.K. Rowling',
    },
    quidditch_through_ages: {
      title: 'Quidditch Through the Ages',
      language: 'English',
      author: 'J.K. Rowling',
    },
  };

  // transform object into list
  function makeListFromObject(object) {
    const ul = document.createElement('ul');
    const ids = Object.keys(object);
    for (let i = 0; i < ids.length; i++) {
      const li = document.createElement('li');
      const header = document.createElement('h1');
      const language = document.createElement('h2');
      const author = document.createElement('h2');

      header.innerText = 'Book ' + (i + 1) + ': ' + object[ids[i]].title;
      language.innerText = 'Language: ' + object[ids[i]].language;
      author.innerText = 'Author: ' + object[ids[i]].author;

      li.id = 'list-item-' + (i + 1);
      li.appendChild(header);
      li.appendChild(language);
      li.appendChild(author);

      ul.appendChild(li);
    }
    return ul;
  }

  // put the list created from object into main section of the webpage
  newList = makeListFromObject(bookDetailed);
  mainSection[0].appendChild(newList);

  // an object containing book covers
  const bookCovers = {
    harry_potter_philosophers_stone: './images/philosopher.jpg',
    harry_potter_chamber_secrets: './images/chamber.jpg',
    harry_potter_prisoner_azkaban: './images/prisoner.jpg',
    harry_potter_goblet_fire: './images/goblet.jpg',
    harry_potter_order_phoenix: './images/order.jpg',
    harry_potter_halfblood_prince: './images/half-blood.jpg',
    harry_potter_deathly_hallows: './images/deathly.jpg',
    tales_beedle_bard: './images/tales.jpg',
    fantastic_beasts: './images/fantastic.jpg',
    quidditch_through_ages: './images/quidditch.jpg',
  };

  // add covers to the existing list of books
  function addBookCovers(object) {
    const books = Object.keys(object);
    for (let i = 0; i < books.length; i++) {
      const img = document.createElement('img');
      const imageSrc = object[books[i]];
      const imageAlt = books[i];
      const listItem = document.getElementById('list-item-' + (i + 1));

      listItem.appendChild(img);
      img.src = imageSrc;
      img.alt = imageAlt;
    }
  }

  // called the fuction to add covers to the list
  addBookCovers(bookCovers);
}
