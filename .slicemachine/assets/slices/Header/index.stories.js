import MyComponent from '../../../../slices/Header';

export default {
  title: 'slices/Header'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"header","items":[],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"two-column","slice_type":"header","items":[],"primary":{"backgroundcolor":"purple","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Expedite B2B e-markets","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'two-column'

export const _TwoColumnWithMenu = () => <MyComponent slice={{"variation":"twoColumnWithMenu","name":"two-column-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":[{"type":"paragraph","text":"Excepteur minim aliqua et nostrud ipsum qui ullamco officia laboris eiusmod.","spans":[]}]},{"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":[{"type":"paragraph","text":"Aute est consequat sit ex excepteur incididunt sunt ipsum. Id voluptate eiusmod cupidatat. Sint incididunt laborum anim sit aute enim cillum proident velit velit magna anim proident fugiat esse.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Aliquip amet proident commodo elit ex amet ipsum dolor irure irure in reprehenderit Lorem. Cupidatat in et officia esse Lorem velit ullamco reprehenderit aliqua est.","spans":[]}]},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":[{"type":"paragraph","text":"Ad adipisicing ullamco veniam sunt cillum pariatur quis do. Nostrud irure ullamco in pariatur ut enim magna labore sit do reprehenderit in sunt dolor consectetur.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Eu ea ut commodo dolor incididunt cillum exercitation.","spans":[]}]}],"primary":{"backgroundcolor":"darkblue","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"textOnImage":[{"type":"heading1","text":"Cultivate virtual blockchains","spans":[]}]},"id":"_TwoColumnWithMenu"}} />
_TwoColumnWithMenu.storyName = 'two-column-with-menu'

export const _FullWidthWithMenu = () => <MyComponent slice={{"variation":"fullWidthWithMenu","name":"full-width-with-menu","slice_type":"header","items":[{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Deserunt dolore deserunt ex duis est deserunt anim sit esse aliqua esse nisi sint ad.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Amet ea adipisicing laborum veniam proident deserunt consectetur ex ullamco nisi magna culpa.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Aute laborum ad dolor velit aliquip nulla elit. Proident minim veniam veniam velit magna et enim irure nisi non sunt dolor culpa cupidatat tempor. Ullamco ut anim in ut irure velit non ullamco quis tempor duis.","spans":[]}]},{"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":[{"type":"paragraph","text":"Reprehenderit consequat sit esse fugiat sunt eu voluptate nulla occaecat laborum. Laboris eiusmod nulla ipsum dolore duis. Cupidatat officia reprehenderit exercitation dolore Lorem sit consequat mollit esse dolore dolore do.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Duis magna cillum cillum cillum aliqua irure elit aliqua ipsum aliqua in magna.","spans":[]}]},{"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":[{"type":"paragraph","text":"Consequat do nisi do eiusmod ullamco. Nisi non ullamco pariatur commodo.","spans":[]}]}],"primary":{"backgroundcolor":"purple","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_FullWidthWithMenu"}} />
_FullWidthWithMenu.storyName = 'full-width-with-menu'

export const _FullWidthWithBgImage = () => <MyComponent slice={{"variation":"fullWidthWithBgImage","name":"Full Width with BG-Image","slice_type":"header","items":[],"primary":{"backgroundcolor":"white","headersvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"}},"id":"_FullWidthWithBgImage"}} />
_FullWidthWithBgImage.storyName = 'Full Width with BG-Image'
