import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  //console.log(song);
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        <i>Title:</i> <b>{song.title}</b>
        <br />
        <i>Duration:</i> <b>{song.duration}</b>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
