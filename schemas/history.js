export default {
    name: 'history',
    title: 'History',
    type: 'document',
    fields: [
        {
            name: 'when',
            title: 'When',
            description: 'This doesn\'t need to be exact, we\'re only using the year and month ',
            type: 'datetime',
        },
        {
            name: 'type',
            title: 'Type of Milestone',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Something', value: 'something'},
                    {title: 'Another thing', value: 'anotherthing'},
                    {title: 'Pick a damn thing', value: 'pickitalready'},
                ]
            }
        },
        {
            name: 'milestone',
            title: 'Milstone',
            type: 'string',
        },
        {
            name: 'milestoneKorean',
            title: 'Milstone (Korean)',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            description: 'This will be small; chill on detailed images',
            type: 'image',
        },
    ]
}