import type { CollectionConfig } from 'payload/types'

export const SvgMedia: CollectionConfig = {
    slug: 'svgmedia',
    labels: {
        singular: 'svgmedia',
        plural: 'svgmedia'
    },
    access: {
        read: () => true
    },
    upload: {
        mimeTypes: ['image/svg+xml']
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true
        }
    ]
}