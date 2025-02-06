function Songs(props) {
  const songs = props.songs;
  const currentlyPlaying = props.currentlyPlaying;
  return (
    <ol className="list">
      <h2 className="song-current">
        {"Current song: " + songs[currentlyPlaying].title}
      </h2>
      {songs.map((song) => {
        return (
          <body>
            <h2 className="song-list">{song.title}</h2>
            <p className="song-item">{song.artist}</p>
            <img
              className="song-img"
              src={song.albumCover}
              alt="image of album cover"
            />
          </body>
        );
      })}
    </ol>
  );
}

export default Songs;
