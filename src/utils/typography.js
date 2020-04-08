import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.82,
  scaleRatio: 2.0,
  headerFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '500',
        '600',
        '700'
      ]
    },
    {
      name: 'Merriweather',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '700',
      ]
    }
  ],
  headerGray: 10,
  headerWeight: 700,
  bodyGray: 20,
  bodyWeight: 400
});

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography