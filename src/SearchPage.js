import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneOutlinedIcon />
              <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
               image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
               channel="Clever Programmer"
               verified
               subs="660k"
               noOfVideos={382}
               description="You can Find awesome programming lesson here!"
            />
            <hr />

            <VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="59 seconds ago"
               channel="Clever Programmer"
               title="Let's Build a YouTube Clone with REACT JS for Beginners"
               image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBzdDF6q1WtimltXo6rEm4vlbwZOA"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="7 Jul 2020"
               channel="Clever Programmer"
               title="
               🔴Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
               image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBuxYKxJJAKTos0u6_neFEsk7-3zA"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="8 Jul 2020"
               channel="Clever Programmer"
               title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
               image="https://i.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCEDN37Ib9ppUHAy3H-0n-fWB-nFg"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="20 Jul 2020"
               channel="Clever Programmer"
               title="🔴 Build a COVID-19 Tracker with REACT JS for Beginners (React Hooks and Material UI)"
               image="https://i.ytimg.com/vi/cF3pIMJUZxM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBg6eO9uWTyxNUlsOisNBahhEuJEA"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="Streamed live on 27 Jul 2020"
               channel="Clever Programmer"
               title="🔴 Let's Build a TINDER Clone with REACT JS for Beginners"
               image="https://i.ytimg.com/vi/DQfeB_FKKkc/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLACGkQbZC-HhCj6-4b0Fc55d2dIvA"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="9 Jul 2020"
               channel="Clever Programmer"
               title="🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)"
               image="https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBItWKQuFyRiCvRlMeCHX6boNwd0g"
            />

<VideoRow
               views="1.4M"
               subs="659K"
               description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
               timestamp="Streamed live on 3 Aug 2020"
               channel="Clever Programmer"
               title="🔴 Build a Spotify Clone with REACT JS for Beginners"
               image="https://i.ytimg.com/vi/pnkuI8KXW_8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAH7LQY05I-REwYfAiHc2imXwUJOg"
            />
        </div>
    );
}

export default SearchPage;
