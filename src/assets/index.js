const Assets =[
    { "id"   :1,
    "image" :require ("./assets/curry-goes-lakers.jpg")
  },
  {
    "id"   :2,
    "image" :require("./assets/lakers-no-more.jpg" )
  },
  {
    "id"   :3,
    "image" :require("./assets/raptor-predates-nba.jpg" )
  },
  {
    "id"   :4,
    "image" :require("./assets/social_share_default.png" )
  },
  {
    "id"   :5,
    "image" :require ("./assets/Kobe_Bryant_2015.jpg" )
  }
];

function imageLoader() {
    return Assets;
  }
export default imageLoader;