//talk to sanity
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "2worg8g7",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
