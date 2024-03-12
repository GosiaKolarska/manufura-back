export default {
  name: 'homeServicesItem',
  type: 'object',
  title: 'Home Service Item',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'ctaLinks',
      type: 'array',
      title: 'CTA Links',
      of: [{type: 'ctaLink'}],
    },
  ],
}
