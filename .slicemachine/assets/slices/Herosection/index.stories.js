import MyComponent from '../../../../slices/Herosection';

export default {
  title: 'slices/Herosection'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"yellow","herosvgMobile":{"link_type":"media","url":"https://source.unsplash.com/daily"},"herosvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"caption":"utilize turn-key niches"},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumnHero = () => <MyComponent slice={{"variation":"twoColumnHero","name":"two-column-hero","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"darkblue","herosvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"heroimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"heroheadline":[{"type":"heading2","text":"Deliver web-enabled portals","spans":[]}]},"id":"_TwoColumnHero"}} />
_TwoColumnHero.storyName = 'two-column-hero'
