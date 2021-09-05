import { ResponsiveLine } from '@nivo/line';

const Chart = ({ predArr, preyArr }) => {
	const data = [
		{
			id: 'Predators',
			color: '#42c5f5',
			data: predArr.map((pred, i) => {
				return { x: i, y: pred };
			}),
		},
		{
			id: 'Prey',
			color: '#3dff9e',
			data: preyArr.map((pred, i) => {
				return { x: i, y: pred };
			}),
		},
	];

	return (
		<div style={{ height: '600px' }}>
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
				xScale={{ type: 'linear', }}
				yScale={{ type: 'linear', min: '0', max: 'auto', stacked: false, reverse: false }}
				yFormat=' >-.2f'
				curve='basis'
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Rounds',
					legendOffset: 36,
					legendPosition: 'middle',
				}}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Population',
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				enableGridX={false}
				enableGridY={false}
        colors={['#e31e63', '#42c5f5']}

				lineWidth={4}
				enablePoints={false}
				pointSize={10}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={2}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabelYOffset={-12}
				useMesh={true}
				theme={{
					textColor: '#ffffff',
					fontSize: 14,
					axis: {
						domain: {
							line: {
								stroke: '#ffffff',
								strokeWidth: 1,
							},
						},
						ticks: {
							line: {
								stroke: '#ffffff',
								strokeWidth: 1,
							},
						},
					},
					grid: {
						line: {
							stroke: '#dddddd',
							strokeWidth: 1,
						},
					},
				}}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</div>
	);
};

export default Chart;
