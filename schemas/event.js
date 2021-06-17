export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'nameKorean',
            title: 'Name (Korean)',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Don\'t forget to generate a slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
            },
          },
        {
            name: 'when',
            title: 'When',
            type: 'datetime',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'locationKorean',
            title: 'Location (Korean)',
            type: 'string',
        },
        {
            name: 'maplinks',
            title: 'Map Links',
            type: 'array',
            of : [{type: 'url'}]

        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'descriptionKorean',
            title: 'Description (Korean)',
            type: 'blockContent',
        },
        {
            name: 'posterImage',
            title: 'Poster Image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'name',
            date: 'when',
            media: 'posterImage'
        }

    }
}

