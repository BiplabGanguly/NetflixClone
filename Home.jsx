import React from 'react'
import requestApi from '../ApiRequest';
import { Banner } from './Banner';
import { Parts } from './Parts';

const Home = () => {
    return (
        <div>
            <Banner fetchURL = {requestApi.fetchTopRated}/>
            
            <Parts title = 'Netflix Originals' fetchURL = {requestApi.fetchTopRated} isLargePart/>
            <Parts title = 'Upcoming' fetchURL = {requestApi.fetchUpcoming}/>
            <Parts title = 'Popular' fetchURL = {requestApi.fetchPopular}/>
            <Parts title = 'Now Playing' fetchURL = {requestApi.fetchNowPlaying}/>
        </div>
    )
}

export default Home;
