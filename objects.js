var playlist={Ganga:"Carry you home"};

function updatePlaylist (object, artistName, songTitle ){
  object[artistName]=songTitle;

  return updatePlaylist

}

function removeFromPlaylist  (object, artistName ){
  delete object.artistName;

  return removeFromPlaylist

}

updatePlaylist(playlist, 'Midieval','Laggaaee' );

//removeFromPlaylist (playlist, 'Midieval')
