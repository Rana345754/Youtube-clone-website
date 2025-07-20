// Array of 20 video titles
const videos = [
  {
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee",
    views: "3.4M views",
    timeAgo: "6 months ago",
    thumbnail: "/images/thumbnail-1.webp",
    channelImage: "/images2/channel-1.jpeg",
    duration: "14:20"
  },
  {
    title: "Try Not To Laugh Challenge #9",
    author: "Markiplier",
    views: "19M views",
    timeAgo: "4 years ago",
    thumbnail: "/images/thumbnail-2.webp",
    channelImage: "/images2/channel-2.jpeg",       
    duration: "8:22"
  },
  {
    title: "HTML & CSS Full Course - Beginner to Pro",
    author: "SuperSimpleDev",
    views: "15M views",
    timeAgo: "3 years ago",
    thumbnail: "/images/thumbnail-3.avif",
    channelImage: "/images2/channel-3.jpg",
    duration: "6:31:24"
  },
  {
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    author: "Veritasium",
    views: "18M views",
    timeAgo: "4 months ago",
    thumbnail: "/images/thumbnail-4.webp",
    channelImage: "/images2/channel-4.jpeg",
    duration: "22:09"
  },
  {
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    author: "CS Dojo",
    views: "519K views",
    timeAgo: "5 years ago",
    thumbnail: "/images/thumbnail-5.webp",
    channelImage: "/images2/channel-5.jpeg",
    duration: "11:17"
  },
  {
    title: "Anything You Can Fit In The Circle I’ll Pay For",
    author: "MrBeast",
    views: "141M views",
    timeAgo: "1 year ago",
    thumbnail: "/images/thumbnail-6.webp",
    channelImage: "/images2/channel-6.jpeg",
    duration: "19:59"
  },
  {
    title: "Why Planes Don't Fly Over Tibet",
    author: "RealLifeLore",
    views: "6.6M views",
    timeAgo: "1 year ago",
    thumbnail: "/images/thumbnail-7.webp",
    channelImage: "/images2/channel-7.jpeg",
    duration: "10:13"
  },
  {
    title: "Inside The World's Biggest Passenger Plane",
    author: "Tech Vision",
    views: "3.7M views",
    timeAgo: "10 months ago",
    thumbnail: "/images/thumbnail-8.webp",
    channelImage: "/images2/channel-8.jpeg",
    duration: "7:12"
  },
  {
    title: "The SECRET to Super Human STRENGTH",
    author: "ThenX",
    views: "20M views",
    timeAgo: "3 years ago",
    thumbnail: "/images/thumbnail-9.webp",
    channelImage: "/images2/channel-9.jpeg",
    duration: "13:17"
  },
  {
    title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    views: "14M views",
    timeAgo: "1 year ago",
    thumbnail: "/images/thumbnail-10.webp",
    channelImage: "/images2/channel-10.jpeg",
    duration: "7:53"
  },
  {
    title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    author: "Destination Tips",
    views: "3M views",
    timeAgo: "1 year ago",
    thumbnail: "/images/thumbnail-11.webp",
    channelImage: "/images2/channel-11.jpeg",
    duration: "4:10"
  },
  {
    title: "What would happen if you didn’t drink water? - Mia Nacamulli",
    author: "TED-Ed",
    views: "12M views",
    timeAgo: "5 years ago",
    thumbnail: "/images/thumbnail-12.webp",
    channelImage: "/images2/channel-12.jpeg",
    duration: "4:51"
  },
  {
    title: "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
    author: "Sony Music India",
    views: "15M views",
    timeAgo: "10 days ago",
    thumbnail: "/images/thumbnail-13.avif",
    channelImage: "/images2/channel-13.jpg",
    duration: "3:04"
  },
  {
    title: "FULL MATCH: Roman Reigns vs. John Cena | Universal Title Match: SummerSlam 2021",
    author: "WWE",
    views: "2.1M views",
    timeAgo: "10 days ago",
    thumbnail: "/images/thumbnail-14.avif",
    channelImage: "/images2/channel-14.jpg",
    duration: "32:26"
  },
  {
    title: "Aaj Ki Raat -Full Song |Stree 2|Tamannaah Bhatia|Rajkummar Rao|Sachin-Jigar|Madhubanti|Divya|Amitabh",
    author: "Saregama Music",
    views: "704M views",
    timeAgo: "8 Months ago",
    thumbnail: "/images/thumbnail-15.avif",
    channelImage: "/images2/channel-16.jpg",
    duration: "4:47"
  },
  {
    title: "RCB anthem IPL 2021",
    author: "Royal Challengers Bangaluru",
    views: "10M views",
    timeAgo: "4 year ago",
    thumbnail: "/images/thumbnail-16.avif",
    channelImage: "/images2/channel-15.jpg",
    duration: "1:47"
  }
];


const videoList = document.getElementById("videoList");
const searchInput = document.getElementById("searchInput");

function renderVideos(videosToRender) {
  videoList.innerHTML = "";

  videosToRender.forEach(video => {
    const div = document.createElement("div");
    div.className = "video-preview";
    div.innerHTML = `
      <div class="thumbnail-row">
        <img class="thumbnail" src="${video.thumbnail}" alt="Thumbnail">
        <div class="video-time">${video.duration}</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${video.channelImage}" alt="Channel">
        </div>
        <div class="video-info">
          <p class="video-title">${video.title}</p>
          <p class="video-author">${video.author}</p>
          <p class="video-stats">${video.views} &#183; ${video.timeAgo}</p>
        </div>
      </div>
    `;
    videoList.appendChild(div);
  });
}


// Initial render
renderVideos(videos);

// Search filter logic
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = videos.filter(video =>
    video.title.toLowerCase().includes(query) ||video.author.toLowerCase().includes(query) 
  );
  renderVideos(filtered);
});
