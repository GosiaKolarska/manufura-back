export default {
  name: 'HomeClientsLogo',
  title: 'Client Logo',
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
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    },
  ],
}
