import { createClient } from "@sanity/client";

export default createClient({
  projectId: "jt8ojmxi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});
