import MyComponent from '../../../../slices/Herosection';

export default {
  title: 'slices/Herosection'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"yellow","herosvg":{"link_type":"media","url":"https://images.prismic.io/aerosolalliance/e41e5558-9a69-4e23-99ff-ebc8a465f934_AEROSOL+ALLIANCE.svg?auto=compress,format"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumnHero = () => <MyComponent slice={{"variation":"twoColumnHero","name":"two-column-hero","slice_type":"herosection","items":[],"primary":{"backgroundcolor":"grey","herosvg":{"link_type":"media","url":"https://source.unsplash.com/daily"},"heroimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&h=500&fit=crop"},"heroheadline":[{"type":"heading2","text":"Cultivate impactful partnerships","spans":[]}]},"id":"_TwoColumnHero"}} />
_TwoColumnHero.storyName = 'two-column-hero'