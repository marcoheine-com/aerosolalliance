import MyComponent from '../../../../slices/Header';

export default {
  title: 'slices/Header'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"header","items":[],"primary":{"Backgroundcolor":"Darkblue","HeadlineSVG":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"header","items":[],"primary":{"Backgroundcolor":"Grey","HeadlineSVG":{"link_type":"media","url":"https://source.unsplash.com/daily"},"Heroimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"Headline":[{"type":"heading2","text":"Aggregate real-time e-tailers","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
