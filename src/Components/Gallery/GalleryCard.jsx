const GalleryCard=({title,image,children})=>{
    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300">
                {
                    image && (
                        <img src={image} alt={title} className="w-full h-48 object-cover" />

                    )
                }
                <div className="p-4">
                  {title && <h2 className="text-sm text-center text-italic font-semibold mb-2">{title}</h2>}
                    {children}

                </div>
            </div>
        </>
    );
}
export default GalleryCard;


