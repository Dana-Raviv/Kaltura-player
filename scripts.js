document.onreadystatechange = function () {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "body").style.visibility = "hidden";
                document.querySelector(
                    "#pageloader").style.visibility = "visible";
            } else {
                document.querySelector(
                    "#pageloader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
            }
        };

const table = [
      {
title: "Dual screen + hotspot + chapters",
description: '<ul><li><b>Dual screen-</b> a customized experience for every viewer, in an improved UX/UI. Hover on the scrubber for a dual-stream preview of the playback area.</li><li><b>Hotspots-</b> now offering greater control over timing, capabilities, and hotspot look & feel. </li><li><b>Chapters-</b> searchable and available to view right from the scrubber. Click on the navigation button to review hotspots and chapters</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54381072?iframeembed=true&entry_id=1_4r0o7gtg' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`

      },

      {
title: "Quiz",
description: '<ul><li>Now easier for users to take a quiz, review their answers, navigate to the right questions, and submit.</li><li>Checkout the chapters inside the navigation menu.</li><li>Quiz questions are now also available to view in the navigation menu.</li></ul>',

v7: `<div class="player"><iframe type="text/javascript"src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54614992?iframeembed=true&entry_id=1_xutec75g' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
      {
title: "Transcript",
description: '<ul><li>Now part of the player’s UI so admins can embed everywhere.</li><li>Clickable timestamp takes you to any point in the video.</li><li>Click on the settings button in the play bar area to customize how captions appear on the screen- decide between different sizes, backgrounds, font size, and more.</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615092?iframeembed=true&entry_id=1_iaro3qez' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
   {
title: "Audio player",
description: '<ul><li>Dedicated sleek and slim audio player. </li><li>Customize audio speed, volume, and looping.</li><li>Perfect for on-the-go: responsive player that adjusts to any screen size.</li></ul>',

v7:`<div class="playermin"><div class="center"><div class="audioplayer"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54614902?iframeembed=true&entry_id=1_f8jmu6cv' style=" width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div></div></div>`
      },
      {
title: "Interactive video",
description: 'Engage viewers with personalized, interactive video that let them choose their own adventure.',

v7: `<div class="player"><iframe src="player.html" style="position: absolute;"></iframe></div>`
      },
       {
title: "Playlist",
description: '<ul><li>Review sleek and updated UX/UI of the playlist.</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615102?iframeembed=true&playlist_id=1_rdw2sl8a' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
{
title: "Download + info + share",
description: '<ul><li><b>Download-</b> Download captions, flavors, transcript, and attachments right from the player.</li><li><b>Info-</b> Updated UI/UX now including content owner.</li><li><b>Share-</b> Additional sharing option- share a clip.</li></ul>',

v7:`<div class="player"><iframe type="text/javascript" src='https://cdnapisec.kaltura.com/p/1912501/embedPlaykitJs/uiconf_id/54615112?iframeembed=true&entry_id=1_4r0o7gtg' style="position: absolute; width: 100%; height: 100%" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0"></iframe></div>`
      },
];


// Get all elements with class 'tab' and convert the resulting NodeList to an Array
const tabs = Array.from(document.getElementsByClassName('tab'));

// Get elements by their IDs
const title = document.getElementById('title');
const description = document.getElementById('description');

const v7 = document.getElementById('v7');

window.onload = function(){
  for (let i = 0; i < tabs.length; i++) {
     tabs[i].textContent = table[i].title;
  }
  title.innerHTML = table[0].title;
  description.innerHTML = table[0].description;

  v7.innerHTML = table[0].v7;
  tabs[0].classList.add('active');
}

tabs.forEach((element, index) => {
  element.onclick = function() {
    title.innerHTML = table[index].title;
    description.innerHTML = table[index].description;

    v7.innerHTML = table[index].v7;
    // remove action from all the buttons
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    // add active to the current
    tabs[index].classList.add('active');
  };
});
