import { renderIntoDocument } from "react-dom/test-utils";

function PlayCounts({playCounts, songs}) {
  return(
    <ol className="list">
    <h2 className="song-item">Play Count</h2>
        {songs.map((song)=>{
            if(song.title === playCounts[song.title]){
                song.playCounts = playCounts[song.title]
            }
        })}
  )
    </ol>

}

export default PlayCounts;
