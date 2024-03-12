export default {
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'serviceLists',
      title: 'Service Lists',
      type: 'array',
      of: [{type: 'serviceList'}],
    },
  ],
}
