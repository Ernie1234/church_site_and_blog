import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_SECRET_PROJECT_ID, // DONE
  dataset: "production", // my comment: set to 'production' or 'development'    DONE
  useCdn: true, // set to `false` to bypass the edge cache    // NOTED
  apiVersion: "2023-09-07", // use current date (YYYY-MM-DD) to target the latest API version   DONE
  token: import.meta.env.VITE_SANITY_SECRET_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
