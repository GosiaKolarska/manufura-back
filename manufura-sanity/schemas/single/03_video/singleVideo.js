export default {
  name: 'singleVideo',
  title: 'Service Video Section',
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
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
