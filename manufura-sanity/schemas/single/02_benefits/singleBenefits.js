export default {
  name: 'singleBenefits',
  title: 'Single Benefits',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'benefitItem'}],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
