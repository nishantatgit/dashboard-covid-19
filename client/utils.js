export const shadeGenerator = function shadeGenerator(color) {
  // Convert the input color string to an RGB object
  let rgb = hexToRgb(color);

  // Calculate the light and dark step values for each color component (red, green, blue)
  let rStep = Math.round((255 - rgb.r) / 10);
  let gStep = Math.round((255 - rgb.g) / 10);
  let bStep = Math.round((255 - rgb.b) / 10);

  // Initialize an array to hold the shades
  let shades = [];

  // Add 5 darker shades to the array
  for (let i = 1; i <= 5; i++) {
    let r = Math.max(0, rgb.r + rStep * i);
    let g = Math.max(0, rgb.g + gStep * i);
    let b = Math.max(0, rgb.b + bStep * i);
    let shade = rgbToHex({ r: r, g: g, b: b });
    shades.push(shade);
  }

  // Add the input color to the array
  shades.push(color);

  // Add 5 lighter shades to the array
  for (let i = 1; i <= 5; i++) {
    let r = Math.min(255, rgb.r - rStep * i);
    let g = Math.min(255, rgb.g - gStep * i);
    let b = Math.min(255, rgb.b - bStep * i);
    let shade = rgbToHex({ r: r, g: g, b: b });
    shades.push(shade);
  }

  // Return the array of shades
  return shades;
};

// Helper function to convert a hex color code to an RGB object
function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return { r: r, g: g, b: b };
}

// Helper function to convert an RGB object to a hex color code
function rgbToHex(rgb) {
  let r = rgb.r.toString(16).padStart(2, '0');
  let g = rgb.g.toString(16).padStart(2, '0');
  let b = rgb.b.toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

export const boxCoxTransformation = function boxCoxTransform(data, key) {
  // Extract the data values from the objects
  const values = data.map((d) => d[key]);

  // Calculate the skewness of the data
  const skewness = jStat.skewness(values);

  // Choose the lambda value for the Box-Cox transformation
  let lambda;
  if (skewness < -1) {
    lambda = -1 / skewness;
  } else if (skewness > 1) {
    lambda = skewness;
  } else {
    lambda = 1;
  }

  // Apply the Box-Cox transformation
  const transformedData = data.map((d) => {
    const value = d[key];
    const transformedValue =
      lambda === 0 ? Math.log(value) : (Math.pow(value, lambda) - 1) / lambda;
    return Object.assign({}, d, { [key]: transformedValue });
  });

  // Return the transformed data
  return transformedData;
};
