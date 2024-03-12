export default {
  name: 'singleRelatedSection',
  title: 'Related Services Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'relatedItems',
      title: 'Related Service Items',
      type: 'array',
      of: [{type: 'singleRelatedItem'}],
    },
  ],
}
