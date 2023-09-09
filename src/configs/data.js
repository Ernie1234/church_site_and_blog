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
    "name":author -> name,
    }`;

  return query;
};
