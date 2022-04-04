import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "ulfdipgy",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-08-31'
});