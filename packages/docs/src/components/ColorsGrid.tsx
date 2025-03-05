import { colors } from '@sf-digital-ui/tokens'
import { getContrast } from 'polished'
import { useState } from 'react'

export const ColorsGrid = () => {
	const [activePalette, setActivePalette] = useState('primary-green')

	const displayPalette = Object.entries(colors).find(
		([key]) => key === activePalette,
	)?.[1]

	return (
		<div>
			<select
				style={{
					fontSize: '14px',
					padding: '4px',
					border: `1px solid ${displayPalette?.[500]}`,
					borderRadius: '5px',
					marginBottom: '1rem',
				}}
				onFocus={(e) => {
					e.target.style.outline = 'none'
					e.target.style.boxShadow = '0 0 0 3px #F0F0F0'
				}}
				onChange={(e) => {
					setActivePalette(e.target.value)
				}}
			>
				{Object.entries(colors).map(([key]) => {
					const array = key.split('-')

					const upperCaseArray = array.map((item) => {
						return item.charAt(0).toUpperCase() + item.slice(1)
					})

					const newKey = upperCaseArray.join(' ')

					return (
						<option key={key} value={key}>
							{newKey}
						</option>
					)
				})}
			</select>
			<>
				{Object.entries(displayPalette ?? 'primary-green').map(
					([key, color]) => {
						const contrast = getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'

						return (
							<div
								key={key}
								style={{
									backgroundColor: color,
									padding: '2rem',
								}}
							>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
										fontFamily: 'monospace',
										color: contrast,
									}}
								>
									<strong>{key}</strong>
									<span>{color}</span>
								</div>
							</div>
						)
					},
				)}
			</>
		</div>
	)
}
