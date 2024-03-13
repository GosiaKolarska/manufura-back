import React from "react";
import client from "@/utils/sanityClient";

import Layout from "@/components/Layout/layout";
import {
  HomeSlider,
  HomeCounter,
  HomeAbout,
  HomeClients,
  HomeServices,
  HomeTestimonial,
  HomeVideo,
} from "@/components/home/";

export async function getServerSideProps() {
  try {
    const query = `*[_type == "homepage"][0]{
    homeSlider,
    homeCounter,
    homeAbout,
    homeClients,
    homeServices,
    homeTestimonial,
    homeVideo
  }`;
    const homepageData = await client.fetch(query);

    if (!homepageData) {
      return { notFound: true };
    }

    return { props: { homepageData } };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return { props: { homepageData: null } };
  }
}

export default function Home({ homepageData }) {
  if (!homepageData) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <HomeSlider data={homepageData.homeSlider} />
      <HomeCounter data={homepageData.homeCounter} />
      <HomeAbout data={homepageData.homeAbout} />
      <HomeClients data={homepageData.homeClients.logos} />
      <HomeServices data={homepageData.homeServices} />
      <HomeTestimonial data={homepageData.homeTestimonial} />
      <HomeVideo data={homepageData.homeVideo} />
    </Layout>
  );
}
