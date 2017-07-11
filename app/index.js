import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';

// for local images
// let urls = [
//   'gallery/1.jpg',
//   'gallery/2.jpg',
//   'gallery/3.jpg',
//   'gallery/4.jpg',
//   'gallery/5.jpg',
//   'gallery/6.jpg',
//   'gallery/7.jpg',
//   'gallery/8.jpg'
// ];


// get remote images to diplay loading function
let urls = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xkAcreNXnbhEUolDBy91mLy_JQYm19rWNjJoJBMGiXWc8g6nASStnw',
  'http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSaoTcU7EiRBKlB26__J_YhAXK5WUjffGO9lQZ5bHgJs5Boybzg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-PS4dQmSP_vOfisijijZ1eFPEdDPlEN3TLlOlmzjCwXgyGIR6A',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e4F0fvrLmaXrfGyCFQF8JZwRNBIlZSBdRPXOQJSByMp-4zBP',
  'https://cdn.pixabay.com/photo/2017/01/06/23/21/soap-bubble-1959327_960_720.jpg',
  'https://i.ytimg.com/vi/_tQu4OMlYso/maxresdefault.jpg',
  'http://www.nhm.ac.uk/content/dam/nhmwww/visit/Exhibitions/art-of-british-natural-history/magpie-illustration-keulemans-two-column.jpg',
]

ReactDOM.render(
  <Gallery imageUrls={urls} />,
  document.getElementById('app')
);
