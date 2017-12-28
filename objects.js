


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assing({},playlist,{[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
