import { useContext, useState } from "react";
import FavoritesContext from "./FavoritesContext";
import FavoriteButton from "./FavoriteButton";

const images = [
  { id: 1, url: "https://www.hdwallpapers.in/download/batman_mask_man_4k_hd_superheroes-3840x2160.jpg" },
  { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWbKsGduV2Xf0mISXs-0C9HtDOJxFb-W-3w&s" },
  { id: 3, url: "https://www.pixelstalk.net/wp-content/uploads/images6/Superhero-HD-Wallpaper-Free-download.jpg" },
  { id: 4, url: "https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg" },
  { id: 5, url: "https://www.hdwallpapers.in/download/the_black_panther_4k_hd_superheroes-HD.jpg" },
  { id: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLI35oAEGO8jC2BEVDUS7TBKXUBS5STFl_w&s" },
  { id: 7, url: "https://wallpapers.com/images/hd/4k-superhero-k8nlct1a7hdkqnth.jpg"},
  { id: 8, url: "https://c4.wallpaperflare.com/wallpaper/293/952/22/iron-man-marvel-comics-superhero-the-avengers-wallpaper-preview.jpg"},
  { id: 9, url: "https://www.hdwallpapersfreedownload.com/uploads/large/super-heroes/adam-west-batman.jpg"},
  { id: 10, url: "https://t3.ftcdn.net/jpg/06/63/95/54/360_F_663955484_yxf8DMLcEKtYJLoPGiEToZkyYACCHvEX.jpg"},
  { id: 11, url: "https://w0.peakpx.com/wallpaper/560/180/HD-wallpaper-angry-hulk-ai-art-thumbnail.jpg"},
  { id: 12, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCwQ41kkd30mQAZDXid8WTlQ_9MPWDFtgIg&s"},

];

const Gallery = () => {
  const { favorites } = useContext(FavoritesContext);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = showFavorites
    ? images.filter((img) => favorites.includes(img.id))
    : images;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button 
          className="btn btn-danger" 
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "🔄 Show All" : "❤️ Favorites"}
          {favorites.length > 0 && <span className="badge bg-light text-dark ms-2">{favorites.length}</span>}
        </button>
      </div>

      <h2 className="text-center">Gallery App</h2>
      <div className="row">
        {filteredImages.map((img) => (
          <div key={img.id} className="col-md-4 col-sm-6 mb-3">
            <div className="card position-relative" onClick={() => setSelectedImage(img.url)}>
              <FavoriteButton imageId={img.id} />
              <img src={img.url} className="card-img-top fixed-size" alt="Gallery" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" style={{ display: "block", background: "rgba(0,0,0,0.8)" }} onClick={() => setSelectedImage(null)}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <img src={selectedImage} className="img-fluid" alt="Fullscreen" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
