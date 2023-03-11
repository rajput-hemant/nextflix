const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const getData = async (url: string) => {
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

  try {
    const response = await fetch(
      `${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    return data.items.map((item: any) => {
      return {
        id: item?.id?.videoId || item.id,
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    console.error("Something went wrong!", error);
    return [];
  }
};

export const getVideos = (query: string) => {
  const url = `search?part=snippet&q=${query}`;
  return getData(url);
};

export const getPopularVideos = () => {
  const url =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getData(url);
};
