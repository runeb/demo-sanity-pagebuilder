// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// https://www.sanity.io/docs/schema-types/document-type
const siteSettings = {
  title: 'Site config',
  name: 'config',
  type: 'document',
  fields: [
    // Add schema types here
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Company name',
      name: 'name',
      type: 'string',
    },
  ],
}

const salesPitchItem = {
  title: "Sales pitch",
  name: "salesPitchItem",
  type: "object",
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/image-type
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      }
    },
  ]
};

const salesPitch = {
  type: 'object',
  name: 'salesPitch',
  title: 'Sales pitch',
  fields: [
    {
      title: 'Carousel',
      name: 'carousel',
      type: 'array',
      of: [
        {type: 'salesPitchItem'},
      ],
    },
  ]
}

const tld = {
  type: 'object',
  title: 'TLD',
  name: 'tld',
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'TLD name',
      name: 'name',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/number-type
    {
      title: 'Cost',
      name: 'cost',
      type: 'number',
    },
  ]
}

const domainSearch = {
  type: 'object',
  name: 'domainSearch',
  title: 'Domain Search',
  fields: [
    // https://www.sanity.io/docs/schema-types/array-type
    {
      title: 'TLDs',
      name: 'tlds',
      type: 'array',
      of: [
        {type: 'tld'},
      ],
    },
  ]
}

const landingPage = {
  title: 'Landing page',
  name: 'landingPage',
  type: 'document',
  fields: [
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [
        {type: 'salesPitch'},
        {type: 'domainSearch'},
      ],
    },
  ]
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    domainSearch,
    tld,
    siteSettings,
    landingPage,
    salesPitch,
    salesPitchItem
    /* Your types here! */
  ])
})
