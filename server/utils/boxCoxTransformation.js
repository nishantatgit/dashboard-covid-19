import ss from 'simple-statistics';

export default function boxCoxTransformation(data, key) {
  const transformedData = [];
  const originalValues = data.map((obj) => obj[key]);

  // Check for skewness
  const skewnessBefore = ss.sampleSkewness(originalValues);
  const isSkewed = Math.abs(skewnessBefore) > 0.5;

  // Perform Box-Cox Transformation if data is skewed
  let skewnessAfter;
  let lambda;
  if (isSkewed) {
    lambda = ss.findBestBoxCox(originalValues);
    for (let i = 0; i < data.length; i++) {
      const transformedValue = (Math.pow(data[i][key], lambda) - 1) / lambda;
      data[i][key] = transformedValue;
      transformedData.push(data[i]);
    }
    const transformedValues = transformedData.map((obj) => obj[key]);
    skewnessAfter = ss.sampleSkewness(transformedValues);
  }

  // Return transformed data and skewness information
  return {
    isSkewed,
    originalValues,
    transformedData,
    lambda,
    skewnessBefore,
    skewnessAfter,
  };
}
