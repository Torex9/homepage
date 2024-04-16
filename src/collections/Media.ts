import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'media',
        plural: 'media'
    },
    access: {
        read: () => true
    },
    upload: true,
    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true
        }
    ]
}