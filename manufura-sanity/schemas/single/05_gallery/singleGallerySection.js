export default {
  name: 'singleGallerySection',
  title: 'Single Service Realizations',
  type: 'object',
  fields: [
    {
      name: 'realizations',
      title: 'Realizations',
      type: 'array',
      of: [{type: 'singleGalleryImage'}],
    },
  ],
}
