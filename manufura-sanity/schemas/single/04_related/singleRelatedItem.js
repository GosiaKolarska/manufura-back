export default {
  name: 'singleRelatedItem',
  title: 'Related Service Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'serviceLink',
      title: 'Service Link',
      type: 'string',
      description: 'Enter the relative path (e.g., "/onas")',
    },
  ],
}
