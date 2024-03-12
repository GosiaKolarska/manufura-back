export default {
  name: 'homepage',
  title: 'Homepage',
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
      name: 'homeSlider',
      title: 'Home Slider',
      type: 'array',
      of: [{type: 'homeSlider'}],
    },
    {
      name: 'homeCounter',
      title: 'Home Counter',
      type: 'homeCounter',
    },
    {
      name: 'homeAbout',
      title: 'Home About',
      type: 'homeAbout',
    },
    {
      name: 'homeClients',
      title: 'Home Clients',
      type: 'homeClients',
    },
    {
      name: 'homeServices',
      title: 'Home Services',
      type: 'array',
      of: [{type: 'homeServicesItem'}],
    },
    {
      name: 'homeVideo',
      title: 'Home Video',
      type: 'homeVideo',
    },
  ],
}
