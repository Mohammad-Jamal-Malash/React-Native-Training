/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {playbackServices} from './musicPlayerServices'

AppRegistry.registerComponent(appName, () => App);

//! This import is the same as the documantaion but the diffrence is that
//! we imported the function and put it there so it is more readable
TrackPlayer.registerPlaybackService(() => playbackServices);