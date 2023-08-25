// CryptoChart.tsx
import React from "react";
import { ResponsiveLine } from "@nivo/line";

interface CryptoChartProps {
  priceData: []; // Supposons que priceData est un tableau d'objets avec une propriété x (date) et une propriété y (valeur)
}

const CryptoChart: React.FC<CryptoChartProps> = ({ priceData }) => {
  const data = [
    {
      id: "On 7 days",
      data: priceData.map((price, index) => ({
        x: index, // Utilisez l'index comme abscisse (temps)
        y: price, // Utilisez le prix comme ordonnée (valeur)
      })),
    },
  ];

  return (
    <div style={{ height: "150px", width: "200px" }}>
      <ResponsiveLine
        data={data}
        colors={"#19354f"}
        margin={{ top: 10, right: 10, bottom: 40, left: 0 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
      />
    </div>
  );
};

export default CryptoChart;
