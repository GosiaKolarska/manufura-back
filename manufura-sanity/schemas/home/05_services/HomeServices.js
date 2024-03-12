export default {
  name: 'homeServices',
  type: 'object',
  title: 'Home Services',
  fields: [
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{type: 'homeServicesItem'}],
    },
  ],
}
