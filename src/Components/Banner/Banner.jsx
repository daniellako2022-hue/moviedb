import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styes from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});
  useEffect(() => {
    async function fetchBanner() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBanner();
  }, []);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    <div
      className={styes.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: bannerImage?.backdrop_path
          ? `url(${BANNER_BASE}${bannerImage.backdrop_path})`
          : undefined,
      }}
    >
      <div className={styes.contents}>
        {/* {netflix image */}
        <img
          className={styes.logoImg}
          src={NetflixBannerLogo}
          alt="NetflixBanner"
        />
        {/* { title} */}
        <h1 className={styes.title}>{bannerImage?.original_name}</h1>
        {/* { description} */}
        <h1 className={styes.description}>
          {truncate(bannerImage?.overview, 120)}
        
        </h1>
        {/* {button} */}
        <div className={styes.buttonContainer}>
          <button className={styes.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styes.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* {fading} */}
      <div className={styes.fadeBottom}></div>
    </div>
  );
}

export default Banner;
