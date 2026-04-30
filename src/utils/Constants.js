export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w342";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-e336-4c8a-8f65-84b0cbc3e8e7/web/IN-en-20250106-TRIFECTA-perspective_bfd77098-b8b1-45da-aee0-1509cf6a4e8d_large.jpg";

export const USER_AVATAR =
  "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Ke4NvHl6A/AAAABdpkabKqQAxyWzo6QW_ZnB7zvHQdBE4GgBcHMFuDnVUoRGKTkEp7KFAT2qzUFO9FVBe3kFCbDLagAgZnCn_2SzgNRk_s.png?r=a41";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "Spanish" },
];