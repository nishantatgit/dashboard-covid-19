import jStat from 'jstat'

export default function normalizeData(data, key, technique) {
  const values = data.map((d) => d[key]);

  switch (technique) {
    case 'min-max':
      // Min-Max normalization
      const min = Math.min(...values);
      const max = Math.max(...values);
      return {
        data: data.map((d) => ({
          ...d,
          [key]: (d[key] - min) / (max - min),
        })),
        isSkewed: false,
      };
    case 'z-score':
      // Z-score normalization
      const mean = jStat.mean(values);
      const std = jStat.stdev(values);
      return {
        data: data.map((d) => ({
          ...d,
          [key]: (d[key] - mean) / std,
        })),
        isSkewed: false,
      };
    case 'log':
      // Log transformation
      const logValues = values.map((v) => Math.log(v));
      const logSkewness = jStat.skewness(logValues);
      return {
        data: data.map((d) => ({
          ...d,
          [key]: Math.log(d[key]),
        })),
        isSkewed: logSkewness > jStat.skewness(values),
      };
    case 'box-cox':
      // Box-Cox transformation
      const transformedData = jStat.boxcox(values);
      const bcSkewness = transformedData.skewness;
      return {
        data: data.map((d, i) => ({
          ...d,
          [key]: transformedData[i][0],
        })),
        isSkewed: bcSkewness > jStat.skewness(values),
      };
    default:
      // Invalid technique specified
      throw new Error(`Invalid normalization technique: ${technique}`);
  }
}
