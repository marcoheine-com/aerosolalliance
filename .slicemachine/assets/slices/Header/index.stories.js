import MyComponent from '../../../../slices/Header';

export default {
  title: 'slices/Header'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"header","items":[],"primary":{"backgroundcolor":"darkblue","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"two-column","slice_type":"header","items":[],"primary":{"backgroundcolor":"red","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Extend visionary mindshare","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'two-column'

export const _TwoColumnWithMenu = () => <MyComponent slice={{"variation":"twoColumnWithMenu","name":"two-column-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Aliqua aute ipsum ut. Laboris tempor consequat labore est fugiat cillum consequat sint. Incididunt incididunt est in elit dolore tempor proident commodo magna adipisicing ipsum consectetur enim aliquip cillum.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Aliquip ad aliqua anim occaecat. Dolor dolore incididunt deserunt proident consectetur. Esse quis fugiat fugiat elit ut ad.","spans":[]}]}],"primary":{"backgroundcolor":"yellow","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Utilize killer paradigms","spans":[]}]},"id":"_TwoColumnWithMenu"}} />
_TwoColumnWithMenu.storyName = 'two-column-with-menu'

export const _FullWidthWithMenu = () => <MyComponent slice={{"variation":"fullWidthWithMenu","name":"full-width-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Excepteur et commodo cillum esse quis.","spans":[]}]},{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Adipisicing consectetur do in aliquip est enim magna fugiat velit ipsum nisi exercitation ipsum fugiat cillum.","spans":[]}]},{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Ut labore velit ipsum.","spans":[]}]}],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_FullWidthWithMenu"}} />
_FullWidthWithMenu.storyName = 'full-width-with-menu'

export const _FullWidthWithBgImage = () => <MyComponent slice={{"variation":"fullWidthWithBgImage","name":"Full Width with BG-Image","slice_type":"header","items":[],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}},"id":"_FullWidthWithBgImage"}} />
_FullWidthWithBgImage.storyName = 'Full Width with BG-Image'
