import type { CollectionConfig } from 'payload/types'

export const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    labels: {
        singular: 'Case Study',
        plural: 'Case Studies'
    },
    fields: [
        {
            name: 'identity',
            label: 'Identity',
            type: 'text',
            required: true
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true
        },
        {
            name: 'desc',
            label: 'Description',
            type: 'textarea'
        },
        {
            name: 'backgroundColor',
            label: 'Background Color',
            type: 'text',
            required: true
        },
        {
            name: 'brandBg',
            label: 'Brand Background',
            type: 'text',
            required: true
        },
        {
            name: 'logo',
            label: 'Logo URL',
            type: 'upload',
            relationTo: 'svgmedia',
            required: true
        },

        {
            name: 'featured',
            label: 'Featured',
            type: 'checkbox',
        },
        {
            name: 'featuredImage',
            label: 'Featured Image URL',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'quote',
            label: 'Quote',
            type: 'text'
        },
        {
            name: 'quoteAuthor',
            label: 'Quote Author',
            type: 'text'
        },
        {
            name: 'images',
            label: 'Images',
            type: 'array',
            fields: [
                {
                    name: 'url',
                    label: 'Image URL',
                    type: 'upload',
                    relationTo: 'media',

                },
                {
                    name: 'caption',
                    label: 'Caption',
                    type: 'text'
                }
            ]
        },
        {
            name: 'website',
            label: 'Website URL',
            type: 'text'
        }
    ]
}
