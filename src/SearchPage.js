import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0xffffffff-no-rj-mo"
        channel="CleverProgrammer"
        verified
        subs="660K"
        noOfVideos={382}
        description="you can find awesome programming"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a"
        timestamp="59 seconds ago"
        channel="Clever programmer"
        title="Let's build a Youtube clone"
        image="https://i.ytimg.com/an_webp/jwDjzUTNTzc/mqdefault_6s.webp?du=3000&sqp=CMu6jfkF&rs=AOn4CLBhw1SGHhhC7eZh6NdJVCQJDyWEag"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a"
        timestamp="59 seconds ago"
        channel="Clever programmer"
        title="Let's build a Youtube clone"
        image="https://i.ytimg.com/an_webp/jwDjzUTNTzc/mqdefault_6s.webp?du=3000&sqp=CMu6jfkF&rs=AOn4CLBhw1SGHhhC7eZh6NdJVCQJDyWEag"
      />
    </div>
  );
};

export default SearchPage;
