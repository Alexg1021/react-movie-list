import { useState } from 'react';

import TableComponent from './Table';
import FormComponent from './Form';

import './App.css';
/*
React Team Challenge: Movie List - Part One
Between the two partners:
1. Build a react project using create-react-app and name it react-movie-list
2. Create a github repo for your project
3. Create an array of your combined top 10 movies and save inside your app component
    1. Movie object properties should include: { title, genre, year, movieImage, imdbLink}
4. Create a movie list component where you will render your movies and their details inside of table (must use a table to render the movies). Also render the movie image inside the table (you will need some styling to control the image)
5. Wrap your movie title with an anchor tag so when a user clicks the title, it takes the user to the movie's imdb page.
6. Add a button to your last column in your table that when clicked alerts the movie details
== Work together with your partner in the afternoon to delegate tasks and get the project into GitHub. Please send me your repo by end of day, even if not fully completed. We will continue to add functionality to this project in Part Two==
*/

let movieData = [
  {
    id: 100,
    name: "Howl's Moving Castle",
    year: 2004,
    genre: 'Animation, Adventure, & Family',
    description:
      'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
    imdbRating: 8.2,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0347149/?ref_=nv_sr_srsg_0',
  },
  {
    id: 1,
    name: 'Spirited Away',
    year: 2001,
    genre: 'Animation, Adventure & Family',
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    imdbRating: 8.6,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0245429/?ref_=fn_al_tt_1',
  },
  {
    id: 2,
    name: 'Final Fantasy VII: Advent Children',
    year: 2005,
    genre: 'Animation, Action, & Adventure',
    description:
      "An ex-mercenary is forced out of isolation when three mysterious men kidnap and brainwash the city's children afflicted with the Geostigma disease.",
    imdbRating: 7.2,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BNTk4NjBhZTUtN2MwMy00MzIyLWFhN2ItMmUwYzQ4MWQxODM3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY268_CR3,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0385700/?ref_=nv_sr_srsg_3',
  },
  {
    id: 3,
    name: 'Violet Evergarden: The Movie',
    year: 2020,
    genre: 'Animation, Drama, & Fantasy',
    description:
      "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns , she goes back to her past to feel the true feelings of the Major's ,'I love you.'",
    imdbRating: 8.3,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BYTJmNzc5YTEtNTBmNy00YmUxLWFlNzktYjZjMTg3OGY3ZDhkXkEyXkFqcGdeQXVyMzUzMzgxNA@@._V1_UY268_CR3,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt8652818/?ref_=nv_sr_srsg_3',
  },
  {
    id: 4,
    name: 'Hetalia: Axis Powers - Paint It, White!',
    year: 2010,
    genre: 'Animation, Adventure, & Comedy',
    description:
      'The Axis Powers must band together to save the world from aliens who are painting everything white.',
    imdbRating: 6.6,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BMDAxNDg4MzEtZGU3ZS00ZDQyLTg3OGEtMDk4MzNhMDZjZjg2XkEyXkFqcGdeQXVyNjY5MDk4NDI@._V1_UY268_CR3,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt2653882/?ref_=nv_sr_srsg_3',
  },
  {
    id: 5,
    name: 'Godzilla',
    year: '2014',
    genre: 'Action, Adventure, & Sci-Fi',
    description:
      'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.',
    imdb: 6.4,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0831387/?ref_=fn_al_tt_1',
  },
  {
    id: 6,
    name: 'Pacific Rim',
    year: '2013',
    genre: 'Action, Adventure, & Sci-Fi',
    description:
      'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
    imdb: 6.9,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1663662/?ref_=rvi_tt',
  },
  {
    id: 7,
    name: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action, Adventure, & Drama',
    description:
      'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    imdb: 8.4,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt4154796/?ref_=rvi_tt',
  },
  {
    id: 8,
    name: 'Star Trek: Into Darkness',
    year: '2013',
    genre: 'Action, Adventure, & Sci-Fi',
    description:
      'After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
    imdb: 7.7,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1408101/?ref_=rvi_tt',
  },
  {
    id: 9,
    name: 'The Nightmare Before Christmas',
    year: '1993',
    genre: 'Animation, Family, & Fantasy',
    description:
      'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.',
    imdb: 8.0,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0107688/?ref_=rvi_tt',
  },
];

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [movie, setMovie] = useState({
    id: '',
    name: '',
    year: '',
    genre: '',
    description: '',
    imdbRating: '',
    imageLink: '',
    imdbLink: '',
  });

  /*
  save movie function adds a unique id
  populates movies array with new movie using setMovie()
  clears movie form with setMovie()

   let updatedMovies = movies.filter(m => m.id !== movie.id);
      updatedMovies.push(movie);
      setMovies(updatedMovies);

      1. rewrite my update code so that when an object is updated
      it saves back to the same index in the movies array
      2. use this link as a reference: https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
    
  */
  const saveMovie = () => {
    // Check to see if a movie has an id
    // If it does, then update the movie
    // if it doesn't then save it as a new movie
    // debugger;
    if (movie.id) {
      // replace our original movie details with updated details
      // push back into our array
      console.log(`the movie has an id, the name is ${movie.name}`);
      let updatedMovies = movies.filter(m => m.id !== movie.id);
      updatedMovies.push(movie);
      setMovies(updatedMovies);
    } else {
      // treat as new movie
      // create unique id
      // move into movies array
      movie.id = Date.now();
      setMovies([...movies, movie]);
    }

    // console.log('gets to save movie in app component', movie);
    // Clear my form
    setMovie({
      id: '',
      name: '',
      year: '',
      genre: '',
      description: '',
      imdbRating: '',
      imageLink: '',
      imdbLink: '',
    });
  };

  const removeMovie = movieId => {
    if (window.confirm('Are you sure you want to remove this movie?')) {
      let newMovies = movies.filter(m => m.id !== movieId);
      console.log(newMovies);
      setMovies(newMovies);
    }
  };

  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col'>
          <h2>Welcome to My Movie List!</h2>
        </div>
      </div>

      <FormComponent movie={movie} setMovie={setMovie} saveMovie={saveMovie} />
      <TableComponent
        movies={movies}
        removeMovie={removeMovie}
        setMovie={setMovie}
      />
    </div>
  );
};

export default App;
