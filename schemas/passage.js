export default {
    name: 'passage',
    title: 'Passage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
          {
              name: 'passageText',
              title: 'Passage Text',
              type: 'string',
          },
          {
            name: 'passageTextKorean',
            title: 'Passage Text (Korean)',
            type: 'string',
          }
    ],

    preview: {
        select : {
            title: 'title',
            passage: 'passage'
        },
    },
}