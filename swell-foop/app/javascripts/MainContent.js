import "../stylesheets/main-content.css";
import About from "./About";
import MeetTheBand from "./MeetTheBand";
import Music, {MusicVideos} from "./Music";
import UpcomingShows from "./UpcomingShows";
import {useEffect, useState} from "react";
import {
    preloadImages,
    groupPhotos,
    mirandaPhotos,
    sophiaPhotos,
    tienaPhotos
} from "@/app/javascripts/loadingImages";

export default function MainContent({headerHeight, headerMin}){

    const [doneLoading, setDoneLoading] = useState(false);

    useEffect(() => {
        const CloudImages = `https://res.cloudinary.com/dwrjdndw4/image/upload/f_webp,q_auto,w_1000`;

        const allImages = [groupPhotos, mirandaPhotos, sophiaPhotos, tienaPhotos];

        Promise.all([
            preloadImages(allImages.map(src => CloudImages + src))
        ]).then(() => setDoneLoading(true));
    }, []);

    return(
        <div className="main-content" style={{ marginTop: headerHeight === headerMin ? headerHeight : 0}}>
            <div className="content-box">
                <About images={groupPhotos}/>
            </div>
            {/*<h1>Meet The Band</h1>*/}
            <div className="content-box">
                <MeetTheBand sophiaImages={sophiaPhotos} mirandaImages={mirandaPhotos} tienaImages={tienaPhotos}/>
            </div>
            <div className="content-box" style={{height: 'min-content'}}>
                <h1>Latest Releases</h1>
                <Music/>
                <h1>Music Videos</h1>
                <MusicVideos/>
            </div>
            <div className="content-box">
                <h1>Upcoming Shows</h1>
                <UpcomingShows/>
            </div>
        </div>
    );
}