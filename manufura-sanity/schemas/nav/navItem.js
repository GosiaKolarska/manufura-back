export default {
  name: 'navItem',
  title: 'Nav Item',
  type: 'object',
  fields: [
    {
      name: 'home',
      title: 'Home',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
      ],
    },
    {
      name: 'uslugi',
      title: 'Usługi',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
        {
          name: 'dropdownCategories',
          title: 'Dropdown Categories for Usługi',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'categoryTitle',
                  title: 'Category Title',
                  type: 'string',
                },
                {
                  name: 'links',
                  title: 'Links',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {name: 'title', type: 'string', title: 'Link Title'},
                        {name: 'path', type: 'string', title: 'Link Path'},
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'o_nas',
      title: 'O Nas',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
      ],
    },
    {
      name: 'szkolenie',
      title: 'Szkolenie',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
      ],
    },
    {
      name: 'kontakt',
      title: 'Kontakt',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
      ],
    },
  ],
}
