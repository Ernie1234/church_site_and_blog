export const data = [
  {
    id: 1,
    img: "https://pbs.twimg.com/media/F0_ZxFXaMAE-fzu?format=jpg&name=large",
    link: "https://www.youtube.com/@GideonOdomaOfficial",
  },
  {
    id: 2,
    img: "https://pbs.twimg.com/media/FaSM-XxX0AIZtcC?format=jpg&name=large",
    link: "https://www.youtube.com/@GideonOdomaOfficial",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/VEh_DhEtjQY/maxresdefault.jpg",
    link: "https://www.youtube.com/@GideonOdomaOfficial",
  },
  {
    id: 4,
    img: "https://pbs.twimg.com/media/FM_YYM5VIAAAn2k.jpg",
    link: "https://www.youtube.com/@GideonOdomaOfficial",
  },
];

export const slides = [
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPboxw9yR2osf3NDVaEwBVK_9M-9mAkdjfz4UFgOFNhj-5q0JaZE0Ah5iiJhGRzx_EEvfFMmVFBIGZzLNJedrjYTStyI2Ev1_GP-z8xxRLOEW8cFF7Y-dl7VBLDWsdCbbePqVbR52ZfmZ-8djiisN4KGUz8pH-j0MlCQ51moK_OCIGwlNKq9Y-ypGf/s1364/Reverend%20Gideon%20Odoma%20biography%20-%20Copy.jpg",
  },
  {
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8v0Yw3ZqPEe6IpFVGkJ0UhkjBEveOdY7LRkDE5VYQqzwdkdwPhdDyo0lPiLixT6KzjyLPKXxYFCaCNPRsJGOGVofAazb-f7x9Cm4yg5wdcyKuHKWKT2pzXz65YClDPMuhY6QiYwEBgYL3JTp4l6PAFcnzn8Duczwcy-Kbl8uLsl8535AmJgUkPMpqCg/s1337/10238140-2928-4AC0-9C20-E77196D504E8.jpeg",
  },
  {
    url: "https://static1.tgstat.ru/channels/_0/db/db1e8422f6887ca32d300aca9bad3301.jpg",
  },
  {
    url: "https://i.ytimg.com/vi/kzs4uz5Cli4/maxresdefault.jpg",
  },

  {
    url: "https://www.omhbg.com/wp-content/uploads/2022/10/Reverend-Gideon-Ekele-Odoma-Children.jpg",
  },
  {
    url: "https://yt3.googleusercontent.com/bMe2T84dWWCEH-10JP4ZM4rAihyDxkPk3OPrfSeuw7awb4ab5u11yifxt1LMO-_gMR-4QysBMg=s900-c-k-c0x00ffffff-no-rj",
  },
];

export const blogQuery = `*[_type == 'post'] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
            asset -> {
            _id,
            url
        },
        alt,
    },
    "name":author -> name,
    } | order(publishedAt desc)`;

export const postQuery = (slug) => {
  const query = `*[slug.current == '${slug}'] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
            asset -> {
            _id,
            url
        },
        alt,
    },
    "authorName": author -> name,
"authorImage": author -> image,
"authorBio": author -> bio,
  }`;

  return query;
};
export const authorQuery = (slug) => {
  const query = `*[slug.current == '${slug}'] {
    publishedAt,
    author -> {
    name,
    bio,
    image
  }
  }`;

  return query;
};
// "authorImage": author ->  image
// "authorImage": author->imageField.asset->url
