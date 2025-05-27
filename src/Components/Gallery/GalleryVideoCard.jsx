const GalleryVideoCard = ({ title, video, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300">
      {video && (
        <video
          src={video}
          controls
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && <p className="text-sm text-italic font-semibold mb-2 text-center ">{title}</p>}
        {children}
      </div>
    </div>
  );
};
export default GalleryVideoCard;