export default {
  name: 'singleFAQSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'singleFaqItem'}],
    },
  ],
}
