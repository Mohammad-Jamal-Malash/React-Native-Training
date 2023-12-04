import TrackPlayer ,{Event, RepeatMode} from "react-native-track-player";

import { playListData } from "./src/constants";



export async function setupPlayer(){
    let isSetup = false;
    try {
        await TrackPlayer.getActiveTrackIndex()
    } catch(error) {
        //setupPlayer here is not the function we created this is a method in the
        //TrackPlayer lib.
        await TrackPlayer.setupPlayer();
        isSetup = true;
    } finally{
        return isSetup;
    }
    
}

export async function addTrack(){
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}


export async function playbackServices (){
    TrackPlayer.addEventListener(Event.RemotePause, ()=>{
        // Here some toutorules add this line 
        // it will work fine but this way that we used here the function thing
        // make it posiple to pause from other methods like bluetooth this will help
        // to listen to these events.
        TrackPlayer.pause();
    })

    TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
        TrackPlayer.play();
    })

    TrackPlayer.addEventListener(Event.RemoteNext, ()=>{
        TrackPlayer.skipToNext();
    })
    
    TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{
        TrackPlayer.skipToPrevious();
    })
    
    
}