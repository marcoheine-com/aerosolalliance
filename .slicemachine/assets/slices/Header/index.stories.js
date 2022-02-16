import MyComponent from '../../../../slices/Header';

export default {
  title: 'slices/Header'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"header","items":[],"primary":{"backgroundcolor":"purple","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"two-column","slice_type":"header","items":[],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Redefine vertical interfaces","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'two-column'

export const _TwoColumnWithMenu = () => <MyComponent slice={{"variation":"twoColumnWithMenu","name":"two-column-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Dolore eu laborum quis.","spans":[]}]},{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Dolor est exercitation qui consectetur laboris labore.","spans":[]}]},{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Aute nisi nisi enim consequat mollit proident dolor excepteur dolore reprehenderit minim eu amet aute.","spans":[]}]}],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Facilitate viral schemas","spans":[]}]},"id":"_TwoColumnWithMenu"}} />
_TwoColumnWithMenu.storyName = 'two-column-with-menu'

export const _FullWidthWithMenu = () => <MyComponent slice={{"variation":"fullWidthWithMenu","name":"full-width-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Occaecat officia ut irure laboris excepteur est culpa dolore anim dolor reprehenderit officia veniam amet aliquip.","spans":[]}]},{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Sit eiusmod ullamco pariatur labore.","spans":[]}]},{"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":[{"type":"paragraph","text":"Qui consequat excepteur occaecat ea cillum consectetur deserunt sit elit do reprehenderit nulla proident.","spans":[]}]}],"primary":{"backgroundcolor":"red","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_FullWidthWithMenu"}} />
_FullWidthWithMenu.storyName = 'full-width-with-menu'
