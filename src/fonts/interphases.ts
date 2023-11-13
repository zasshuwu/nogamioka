import localFont from 'next/font/local'

const interphases = localFont({
  src: [
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Bold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Regular.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Italic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Bold Italic.ttf',
      weight: '800',
      style: 'italic'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './tt_interphases_pro/TT Interphases Pro Trial Light Italic.ttf',
      weight: '200',
      style: 'italic'
    }
  ]
})

export default interphases;