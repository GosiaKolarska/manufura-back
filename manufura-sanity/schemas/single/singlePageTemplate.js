export default {
  name: 'singlePageTemplate',
  title: 'Single Page Template',
  type: 'document',
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageName',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'singleHero',
      title: 'Hero Section',
      type: 'singleHero',
    },
    {
      name: 'singleBenefits',
      title: 'Benefits Section',
      type: 'singleBenefits',
    },
    {
      name: 'singleVideo',
      title: 'Video Section',
      type: 'singleVideo',
    },
    {
      name: 'singleRelatedSection',
      title: 'Related Section',
      type: 'singleRelatedSection',
    },
    {
      name: 'singleGallerySection',
      title: 'Gallery Section',
      type: 'singleGallerySection',
    },
    {
      name: 'singleFAQSection',
      title: 'FAQ Section',
      type: 'singleFAQSection',
    },
  ],
}
