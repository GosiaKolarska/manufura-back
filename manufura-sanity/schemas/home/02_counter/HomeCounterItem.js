export default {
  name: 'HomeCounterItem',
  title: 'Counter Item',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'number',
      title: 'Number',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}
