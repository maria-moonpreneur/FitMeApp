// PlayerService.js
import TrackPlayer from 'react-native-track-player';

export default async function PlayerService() {
    // Configure the player
    await TrackPlayer.setupPlayer();

    // Add event listeners
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.stop());
    TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());
    TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious());

    // Start the player service
    await TrackPlayer.startService();
}
