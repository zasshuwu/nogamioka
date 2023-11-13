import localFont from "next/font/local";

const sf_pro_display = localFont({
  src: [
    {
      path: './sf_pro_display/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './sf_pro_display/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './sf_pro_display/SF-Pro-Display-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './sf_pro_display/SF-Pro-Display-RegularItalic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './sf_pro_display/SF-Pro-Display-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './sf_pro_display/SF-Pro-Display-Ultralight.otf',
      weight: '200',
      style: 'normal'
    },
  ]
})

export default sf_pro_display;