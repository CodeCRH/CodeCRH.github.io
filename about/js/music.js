$(document).ready(function(){


  var playlist = [{
      title:"Next to you",
      artist:"Ken Arai",
      mp3: "http://up.yuedisk.com/wl/url/a1906987362/311693/yuedisk.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "http://i0.hdslb.com/video/df/dfa4448c0beacd2015e0f99dd59e5545.jpg"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});