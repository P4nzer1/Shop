import React from 'react';

interface LineChartProps {
  data: Array<{ label: string; value: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.label}>
          {item.label}: {item.value}
        </div>
      ))}
    </div>
  );
};

export default LineChart;
