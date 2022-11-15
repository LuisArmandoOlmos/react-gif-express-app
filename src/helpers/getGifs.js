export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=OKGhRO1au2sG2FUEx3qWh4AK19Zki6jA&q=${category}&limit=4`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({id, title, images}) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }));

  return gifs;
};
