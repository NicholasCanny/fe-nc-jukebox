import { renderIntoDocument } from "react-dom/test-utils";

function PlayCounts({ playCount }) {
  return <p>Number of Plays: {playCount}</p>;
}

export default PlayCounts;
