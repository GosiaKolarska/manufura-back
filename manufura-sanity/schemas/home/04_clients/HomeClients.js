export default {
  name: 'homeClients',
  title: 'Home Clients',
  type: 'object',
  fields: [
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'HomeClientsLogo'}],
    },
  ],
}
