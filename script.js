window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCFq59KZ-HPHn_8zjpqMOtMnru3xVsuf4xAELpg7aZBNDSI0__ly9Ugzj1_k12jPPMXWh9dhZIZKpw2_gv2DDRpSMmeKMb27sp3SKUBUDpMRd7jYEqkTjWf4827Z5xg8dW5t6sDshqCyJfwbjWQFtN-ITYT7wtlMdQURNQC0R0rcWJja3tmsCrYJqQGadFeI81411Y';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
      // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
    console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
    console.error(message);
    });

    player.connect();

};


