import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function PopulationChart({ data }: any) {

    const sortedData = data.sort((a: any, b: any) => a.Year - b.Year);

    return (
        <LineChart width={600} height={300} data={sortedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis tickFormatter={(value) => `${value / 1000000}M`} domain={[305000000, 'auto']} />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="Population"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }}
            />
        </LineChart>
    )
}