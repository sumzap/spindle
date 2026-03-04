import {
  transformPrimitiveColor,
  transformThemeColor,
} from './color-transformer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colorResponse = require('./color-response.json');

describe('transform color', () => {
  it('should transform primitive color correctly', () => {
    const variables = colorResponse;
    const transformedProperties = transformPrimitiveColor(variables);

    expect(transformedProperties).toEqual({
      'Brand Color/Sumzap Black': { $type: 'color', $value: '#000000' },
      'Brand Color/Sumzap Yellow': { $type: 'color', $value: '#fff100' },
    });
  });

  it('should transform theme color correctly', () => {
    const variables = colorResponse;
    const transformedProperties = transformThemeColor(variables);

    expect(transformedProperties).toEqual({
      Light: {
        'Background/Base': {
          $type: 'color',
          $value: '{Primitive Color.Gray/Gray 5}',
        },
        'Surface/Primary': {
          $type: 'color',
          $value: '{Primitive Color.White/White 100}',
        },
      },
      Dark: {
        'Background/Base': {
          $type: 'color',
          $value: '{Primitive Color.Gray/Gray 100}',
        },
        'Surface/Primary': {
          $type: 'color',
          $value: '{Primitive Color.Gray/Gray 90}',
        },
      },
      Green: {
        'Background/Base': {
          $type: 'color',
          $value: '{Primitive Color.Primary Green/Primary Green 90}',
        },
        'Surface/Primary': {
          $type: 'color',
          $value: '{Primitive Color.Primary Green/Primary Green 70}',
        },
      },
    });
  });
});
