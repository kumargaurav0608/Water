import GalleryCard from "./Gallery/GalleryCard";
import GalleryVideoCard from "./Gallery/GalleryVideoCard";

function Gallery(){
    return (
        <>
            <div className="max-md:grid md:flex flex-row gap-5 max-w-lg p-2 m-2">
                <GalleryCard title="Gallery Image" image="img/Gallery-img1.jpg" />
                <GalleryVideoCard title="watervalley" video="video/watervalley-08.jpg"/>
            </div>
        </>
    );
}
export default Gallery;