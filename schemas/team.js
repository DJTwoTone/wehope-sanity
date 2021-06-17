export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'nameKorean',
            title: 'Name (Korean)',
            type: 'string'
        },
        {
            name: 'titleKorean',
            title: 'Title (Korean)',
            type: 'string',
        },
        {
            name: 'bioKorean',
            title: 'Biography (Korean)',
            type: 'blockContent',
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'image',
        },
    ],

    preview: {
        select: {
            name: 'name',
            title: 'title',
            media: 'picture',
        }
    }
}