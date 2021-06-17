export default {
    name: 'program',
    title: 'Program',
    type: 'document',
    fields: [
        {
            name: 'city',
            title: 'City',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Ulsan', value: 'ulsan'},
                    {title: 'Busan', value: 'busan'},
                    {title: 'Daegu', value: 'daegu'},
                ]
            }
        },
        {
            name: 'programName',
            title: 'Program Name',
            type: 'string',
        },
        {
            name: 'programNameKorean',
            title: 'Program Name (Korean)',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Don\'t forget to generate a slug',
            type: 'slug',
            options: {
              source: 'programName',
              maxLength: 96,
            },
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
            name: 'mainPhoto',
            title: 'Main Photo',
            type: 'image',
        },
        {
            name: 'otherPhotos',
            title: 'Other Photos',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        },
    ]
}