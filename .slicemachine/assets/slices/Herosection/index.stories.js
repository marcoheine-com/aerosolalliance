import MyComponent from '../../../../slices/Herosection';

export default {
  title: 'slices/Herosection'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"white","herosvgMobile":{"link_type":"media","url":"https://source.unsplash.com/daily"},"herosvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"caption":"envisioneer one-to-one e-commerce","distanceToBottom":"large"},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumnHero = () => <MyComponent slice={{"variation":"twoColumnHero","name":"two-column-hero","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"lightblue","herosvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"heroimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"heroheadline":[{"type":"heading2","text":"Envisioneer cross-media platforms","spans":[]}],"distanceToBottom":"none"},"id":"_TwoColumnHero"}} />
_TwoColumnHero.storyName = 'two-column-hero'
