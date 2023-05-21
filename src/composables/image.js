import client from '@/plugins/sanity.js'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const useImageUrl = (source) => {
  return builder.image(source)
}
