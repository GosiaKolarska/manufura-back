import React from "react";
import client from "@/utils/sanityClient";

import Layout from "@/components/Layout/layout";
import {
  SingleHero,
  SingleBenefits,
  SingleVideo,
  SingleRelated,
  SingleGallery,
  SingleFaq,
} from "@/components/single/";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const query = `*[_type == "singlePageTemplate" && slug.current == $slug][0]{
    ...,
    singleHero,
    singleBenefits,
    singleVideo,
    singleRelatedSection,
    singleGallerySection,
    singleFAQSection
  }`;
  const pageData = await client.fetch(query, { slug });

  if (!pageData) {
    return { notFound: true };
  }

  return { props: { pageData } };
}

export default function SinglePage({ pageData }) {
  return (
    <Layout>
      <SingleHero data={pageData.singleHero} />
      <SingleBenefits data={pageData.singleBenefits} />
      <SingleVideo data={pageData.singleVideo} />
      <SingleRelated data={pageData.singleRelatedSection} />
      <SingleGallery data={pageData.singleGallerySection} />
      <SingleFaq data={pageData.singleFAQSection} />
    </Layout>
  );
}
