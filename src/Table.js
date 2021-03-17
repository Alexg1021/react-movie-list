const TableComponent = ({ movies, removeMovie, setMovie }) => {
  const showDetails = movieId => {
    let foundMovie = movies.find(movie => movie.id === movieId);
    alert(`${foundMovie.name}: ${foundMovie.description}`);
  };

  const updateMovie = movieFromList => {
    console.log(movieFromList);
    setMovie(movieFromList);
  };
  return (
    <div className='row'>
      <div className='col'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Year</th>
              {/* <th>Description</th> */}
              <th>Rating</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>
                    <a href={movie.imdbLink} target='_blank' rel='noreferrer '>
                      {movie.name}
                    </a>
                  </td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                  {/* <td>{movie.description}</td> */}
                  <td>{movie.imdb}</td>
                  <td>
                    <img src={movie.imageLink} alt={movie.name} />
                  </td>
                  <td>
                    <div className='my-2'>
                      <button
                        className='btn btn-primary'
                        onClick={() => showDetails(movie.id)}>
                        Details
                      </button>
                    </div>
                    <div>
                      <button
                        className='btn btn-danger mb-2'
                        onClick={() => removeMovie(movie.id)}>
                        Remove
                      </button>
                    </div>

                    <div>
                      <button
                        className='btn btn-warning'
                        onClick={() => updateMovie(movie)}>
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
