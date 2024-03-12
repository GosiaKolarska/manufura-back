export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{type: 'navItem'}],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
  ],
}
