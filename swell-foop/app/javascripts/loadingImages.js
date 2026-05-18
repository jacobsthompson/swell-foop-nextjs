import spotify from "../assets/icons/spotify.svg";
import appleMusic from "../assets/icons/apple-music.svg";
import soundcloud from "../assets/icons/soundcloud.svg";
import bandcamp from "../assets/icons/bandcamp.svg";
import youtube from "../assets/icons/youtube.svg";

export const linkIcons = [spotify, appleMusic, soundcloud, bandcamp, youtube];

export function preloadImages(srcs) {
    return Promise.all(srcs.map(src => new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
    })));
}

export const groupPhotos = [
    `/swell-foop/group-photos/1.jpg`,
    `/swell-foop/group-photos/2.jpg`,
    `/swell-foop/group-photos/3.jpg`,
    `/swell-foop/group-photos/4.jpg`,
    `/swell-foop/group-photos/5.jpg`,
    `/swell-foop/group-photos/6.jpg`,
    `/swell-foop/group-photos/7.jpg`,
    `/swell-foop/group-photos/8.jpg`,
    `/swell-foop/group-photos/9.jpg`,
    `/swell-foop/group-photos/10.jpg`,
    `/swell-foop/group-photos/11.jpg`,
    `/swell-foop/group-photos/12.jpg`,
    `/swell-foop/group-photos/13.jpg`,
    `/swell-foop/group-photos/14.jpg`
];

export const mirandaPhotos = [
    `/swell-foop/miranda-photos/1.jpg`,
    `/swell-foop/miranda-photos/2.jpg`,
    `/swell-foop/miranda-photos/3.jpg`,
    `/swell-foop/miranda-photos/4.jpg`,
    `/swell-foop/miranda-photos/5.jpg`,
    `/swell-foop/miranda-photos/6.jpg`,
    `/swell-foop/miranda-photos/7.jpg`,
    `/swell-foop/miranda-photos/8.jpg`,
    `/swell-foop/miranda-photos/9.jpg`
];

export const sophiaPhotos = [
    `/swell-foop/sophia-photos/1.jpg`,
    `/swell-foop/sophia-photos/2.jpg`,
    `/swell-foop/sophia-photos/3.jpg`,
    `/swell-foop/sophia-photos/4.jpg`,
    `/swell-foop/sophia-photos/5.jpg`,
    `/swell-foop/sophia-photos/6.jpg`,
    `/swell-foop/sophia-photos/7.jpg`,
    `/swell-foop/sophia-photos/8.jpg`
];

export const tienaPhotos = [
    `/swell-foop/tiena-photos/1.jpg`,
    `/swell-foop/tiena-photos/2.jpg`,
    `/swell-foop/tiena-photos/3.jpg`,
    `/swell-foop/tiena-photos/4.jpg`,
    `/swell-foop/tiena-photos/5.jpg`,
    `/swell-foop/tiena-photos/6.jpg`,
    `/swell-foop/tiena-photos/7.jpg`,
    `/swell-foop/tiena-photos/8.jpg`
];