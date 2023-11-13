import localFont from 'next/font/local';

// Define the font configuration
const hazelnuts = localFont({
  src: [
    // Bold weight
    {
      path: './tt_hazelnuts/TTHazelnuts-Bold.otf',
      weight: '800',
      style: 'normal'
    },
    // Regular weight
    {
      path: './tt_hazelnuts/TTHazelnuts-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    // Light weight
    {
      path: './tt_hazelnuts/TTHazelnuts-Light.otf',
      weight: '300',
      style: 'normal'
    },
    // Bold Italic
    {
      path: './tt_hazelnuts/TTHazelnuts-BoldItalic.otf',
      weight: '800',
      style: 'italic'
    },
    // Regular Italic
    {
      path: './tt_hazelnuts/TTHazelnuts-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    // Light Italic
    {
      path: './tt_hazelnuts/TTHazelnuts-LightItalic.otf',
      weight: '300',
      style: 'italic'
    }
  ]
});

export default hazelnuts;
