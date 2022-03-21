import {
  CallToAction,
  FullWidthImage,
  Header,
  Herosection,
  ImageGallery,
  LinkImageGallery,
  Quote,
  TextContent,
} from '../../slices'

type SliceType =
  | 'call_to_action'
  | 'full_width_image'
  | 'header'
  | 'herosection'
  | 'image_gallery'
  | 'link_image_gallery'
  | 'quote'
  | 'text_content'

export const Slicemachine = ({ slices }: { slices: any }) => {
  if (!slices) {
    return null
  }

  return slices?.map((slice: any, index: number) => {
    if (!slice) return null

    const sliceType = slice.slice_type as SliceType

    switch (sliceType) {
      case 'call_to_action':
        return <CallToAction slice={slice} key={index} />
      case 'full_width_image':
        return <FullWidthImage slice={slice} key={index} />
      case 'header':
        return <Header slice={slice} key={index} />
      case 'herosection':
        return <Herosection slice={slice} key={index} />
      case 'image_gallery':
        return <ImageGallery slice={slice} key={index} />
      case 'link_image_gallery':
        return <LinkImageGallery slice={slice} key={index} />
      case 'quote':
        return <Quote slice={slice} key={index} />
      case 'text_content':
        return <TextContent slice={slice} key={index} />
      default:
        return null
    }
  })
}
