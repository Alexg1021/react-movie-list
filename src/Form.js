/*
    {
    id: 0,
    name: "Good Will Hunting",
    year: 1997,
    genre: 'Drama',
    description:
      'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life',
    imdbRating: 8.3,
    imageLink:
      'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0119217/',
  },
    */

const FormComponent = ({ movie, setMovie, saveMovie, clearForm }) => {
  const handleSubmit = event => {
    event.preventDefault();
    saveMovie();

    // create a new movie object
    // Then save to my movies
  };

  return (
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
        <form action='submit' id='movie-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='movieName'>Movie Name</label>
            <input
              type='text'
              className='form-control'
              id='movieName'
              value={movie.name}
              onChange={event => {
                // console.log(movie);
                setMovie({ ...movie, name: event.target.value });
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='movieDescription'>Description</label>
            <input
              type='text'
              className='form-control'
              id='movieDescription'
              value={movie.description}
              onChange={event =>
                setMovie({ ...movie, description: event.target.value })
              }
            />
          </div>
          <div className='form-group'>
            <label htmlFor='movieImageLink'>Image Link</label>
            <input
              type='text'
              className='form-control'
              id='movieImageLink'
              value={movie.imageLink}
              onChange={event =>
                setMovie({ ...movie, imageLink: event.target.value })
              }
            />
          </div>

          <div className='form-group'>
            <label htmlFor='movieImdbLink'>IMDB Link</label>
            <input
              type='text'
              className='form-control'
              id='movieImdbLink'
              value={movie.imdbLink}
              onChange={event =>
                setMovie({ ...movie, imdbLink: event.target.value })
              }
            />
          </div>

          <div className='row'>
            <div className='col form-group'>
              <label htmlFor='movieYear'>Year</label>
              <input
                type='text'
                className='form-control'
                id='movieYear'
                value={movie.year}
                onChange={event =>
                  setMovie({ ...movie, year: event.target.value })
                }
              />
            </div>
            <div className='col form-group'>
              <label htmlFor='movieGenre'>Genre</label>
              <input
                type='text'
                className='form-control'
                id='movieGenre'
                value={movie.genre}
                onChange={event =>
                  setMovie({ ...movie, genre: event.target.value })
                }
              />
            </div>
            <div className='col form-group'>
              <label htmlFor='movieRating'>IMDB Rating</label>
              <input
                type='text'
                className='form-control'
                id='movieRating'
                value={movie.imdbRating}
                onChange={event =>
                  setMovie({ ...movie, imdbRating: event.target.value })
                }
              />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <button className='btn btn-primary btn-block'>Save</button>
            </div>
            <div className='col'>
              <button className='btn btn-warning btn-block' onClick={clearForm}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
