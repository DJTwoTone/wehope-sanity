export default {
    name: 'supporter',
    title: 'Supporter',
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
            name: 'image',
            title: 'Logo/Picture',
            type: 'image',
        },
        {
            name: 'link',
            title: 'Webpage Link',
            type: 'url',
        },
    ],

    preview : {
        select: {
            title: 'name',
            media: 'image',
        }
    }
}