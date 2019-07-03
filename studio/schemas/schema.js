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
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Phone number',
      name: 'phone',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Email address',
      name: 'email',
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
  ],
  preview: {
    select: { },
    prepare() {
      return {
        title: 'Sales pitch'
      }
    }
  }
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
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Call to action',
      name: 'cta',
      type: 'string',
    },
    {
      title: 'TLDs',
      name: 'tlds',
      type: 'array',
      of: [
        {type: 'tld'},
      ],
    },
  ],
  preview: {
    select: { },
    prepare() {
      return {
        title: 'Domain Search'
      }
    }
  }
}

const usageStat = {
  type: 'object',
  name: 'usageStat',
  title: 'Usage stat',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Stat',
      name: 'number',
      type: 'number',
    },
  ]
}

const stats = {
  title: 'Usage stats',
  name: 'stats',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Stats',
      name: 'stats',
      type: 'array',
      of: [
        {type: 'usageStat'},
      ],
    },
  ],
  preview: {
    select: { },
    prepare() {
      return {
        title: 'Statistics'
      }
    }
  }
}

const testimonial = {
  title: 'Customer testimonial',
  name: 'testimonial',
  type: 'document',
  fields: [
    // https://www.sanity.io/docs/schema-types/image-type
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      }
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 5
    },
  ],
}

const testimonials = {
  title: "Testimonials",
  name: "testimonials",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string"
    },
    // https://www.sanity.io/docs/schema-types/array-type
    {
      title: "Testimonials",
      name: "items",
      type: "array",
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}]
        }
      ]
    }
  ]
};

const pricingModule = {
  type: 'object',
  name: 'pricing',
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Pricing'
      }
    }
  }
}

const customerLogo = {
  type: 'object',
  name: 'customerLogo',
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/image-type
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
  ]
}

const customers = {
  type: 'object',
  name: 'customers',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      of: [ { type: 'customerLogo' } ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Customers'
      }
    }
  }
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
        {type: 'stats'},
        {type: 'testimonials'},
        {type: 'pricing'},
        {type: 'customers'},
      ],
    },
  ],
  preview: {
    select: {
      title: '',
      subtitle: ''
    },
    prepare() {
      return {
        title: 'Landing page'
      }
    }
  }
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
    salesPitchItem,
    stats,
    usageStat,
    testimonials,
    testimonial,
    pricingModule,
    customers,
    customerLogo
    /* Your types here! */
  ])
})
