import serviceItem from './serviceItem'

export default {
  name: 'serviceList',
  title: 'Service List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'List Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'serviceItem'}],
    },
  ],
}
