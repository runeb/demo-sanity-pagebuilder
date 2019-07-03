const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: "orswqn51",
  dataset: "production",
  useCdn: false
});

const fs = require('fs')

let subscription

async function getData() {
  const query = `
  {
    "company": *[_id == 'global-config'][0],
    "frontPage": *[_id == 'landing-page'][0] {
      "modules": modules[] {
        ...,
        _type == 'salesPitch' => {
          "carousel": carousel[] {
            title,
            subtitle,
            "image": image.asset->url
          }
        },
        _type == 'testimonials' => {
          "items": items[]->{
            name,
            position,
            text,
            "image": image.asset->url
          }
        },
        _type == 'customers' => {
          ...,
          "logos": logos[] {
            name,
            "image": logo.asset->url
          }
        }
       }
    }
  }
  `
  const params = {}
  return client.fetch(query)
    .then(result => fs.writeFileSync("_data/site.json", JSON.stringify(result)))
}

async function run() {
  await getData()
  subscription = client.listen('*', {}, { visibility: 'query' })
  .subscribe(body => {
    if (body.result) {
      return getData()
    }
  })
}

process.on('SIGINT', function() {
  subscription.unsubscribe()
  process.exit();
});

run()