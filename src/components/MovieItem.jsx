import React from "react";

class MovieItem extends React.Component {
  state = {
    willWatch: true
  };

componentWillUnmount() {
 console.log("unmount",this.props.data.title)

}
  render() {
    const {
      data,
      deleteMovie,
      addMovieToWillWatch,
      deleteMovieFromWillWatch
    } = this.props;
    // props.data = {};
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
            data.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{data.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {data.vote_average}</p>
            <button type="button"
                    onClick = { () => {
                       this.setState ({
                          willWatch : !this.state.willWatch
                       })
                       this.state.willWatch ? addMovieToWillWatch(data) : deleteMovieFromWillWatch(data)
                       }}
                    className={this.state.willWatch ? 'btn btn-secondary' : 'btn btn-success' }
            >
                {this.state.willWatch ? 'Add Will Watch' : 'Remove Will Watch'}
            </button> 
          </div>
          <button
            type="button"
            onClick={() => {
              deleteMovie(data);
            }}
          >
            Delete
          </button>
        </div>
        
      </div>
      
    );
  }
}

export default MovieItem;
