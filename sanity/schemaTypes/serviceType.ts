import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'detail',
          fields: [
            { type: 'string', name: 'title'},
            { type: 'array', name: 'description', of: [{type: 'block'}]}
          ]
        }
      ]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true
    }),
  ]
})