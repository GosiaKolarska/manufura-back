export default {
  name: 'homeSlider',
  title: 'Home Slider',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{type: 'HomeSliderItem'}],
    },
  ],
}
