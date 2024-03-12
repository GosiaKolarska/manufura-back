export default {
  name: 'homeCounter',
  title: 'Home Counter',
  type: 'object',
  fields: [
    {
      name: 'counterItems',
      title: 'Counter Items',
      type: 'array',
      of: [{type: 'HomeCounterItem'}],
    },
  ],
}
