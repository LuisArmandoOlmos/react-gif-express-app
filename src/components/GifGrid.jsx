import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="bg-gray px-3 py-2 mt-3 rounded-lg">
      <h2 className="text-tertiary text-xl font-semibold">{category}</h2>
      {
        isLoading && (<h2 className="text-secondary text-base font-normal mt-1">Loading...</h2>)
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-4">
        {images.map((image) => (
          <div className="" key={image.id}>
            <h3 className="text-secondary text-base font-normal mt-1">
              {image.title}
            </h3>
            <img src={image.url} alt={image.title} className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};
