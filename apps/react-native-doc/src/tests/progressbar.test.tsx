import { act, render, waitFor } from '@/utils/test-utils'
import { ProgressBar } from '@sf-digital-ui/react-native'
import { Animated } from 'react-native'

describe('ProgressBar', () => {
	const mockStages = [
		{ id: '1', label: 'Stage 1' },
		{ id: '2', label: 'Stage 2' },
		{ id: '3', label: 'Stage 3' },
	]

	beforeEach(() => {
		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.useRealTimers()
	})

	it('renders correctly with initial stages', () => {
		const { getAllByText } = render(
			<ProgressBar stages={mockStages} currentStage={0} />,
		)

		for (const stage of mockStages) {
			expect(getAllByText(stage.label)).toBeTruthy()
		}
	})

	it('renders correct number of segments', () => {
		const { getAllByTestId } = render(
			<ProgressBar stages={mockStages} currentStage={0} />,
		)

		const segments = getAllByTestId('progress-segment', { exact: false })

		expect(segments.length).toBe(mockStages.length - 1)
	})

	describe('Stage Status', () => {
		it('marks previous stages as completed', () => {
			const { getByTestId } = render(
				<ProgressBar stages={mockStages} currentStage={2} />,
			)

			const firstStage = getByTestId('progress-stage-0')
			const secondStage = getByTestId('progress-stage-1')
			const thirdStage = getByTestId('progress-stage-2')

			expect(firstStage.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: '#006237',
					}),
				]),
			)
			expect(secondStage.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: '#006237',
					}),
				]),
			)

			expect(thirdStage.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: '#f6f6f6',
					}),
				]),
			)
		})

		it('marks current stage as active', async () => {
			const { getByTestId } = render(
				<ProgressBar stages={mockStages} currentStage={0} />,
			)

			const innerCircle = getByTestId('inner-circle-progress-stage-0')

			await waitFor(() => {
				expect(innerCircle.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: '#FFFFFF',
						}),
					]),
				)
				expect(innerCircle).toBeTruthy()
			})
		})

		it('marks future stages as todo', () => {
			const { getByTestId } = render(
				<ProgressBar stages={mockStages} currentStage={0} />,
			)

			const futureStage = getByTestId('progress-stage-2')
			expect(futureStage.props.style).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						backgroundColor: '#f6f6f6',
					}),
				]),
			)
		})
	})

	describe('Animations', () => {
		it('animates progress when moving forward', async () => {
			const { getByTestId, rerender } = render(
				<ProgressBar stages={mockStages} currentStage={0} />,
			)

			rerender(<ProgressBar stages={mockStages} currentStage={1} />)

			const activeSegment = getByTestId('progress-segment-0')
			await waitFor(() => {
				expect(activeSegment.props.style).toEqual(
					expect.objectContaining({
						width: '100%',
					}),
				)
			})
		})

		it('animates progress when moving backward', async () => {
			const { getByTestId, rerender } = render(
				<ProgressBar stages={mockStages} currentStage={2} />,
			)

			rerender(<ProgressBar stages={mockStages} currentStage={1} />)

			const activeSegment = getByTestId('progress-segment-1')
			await waitFor(() => {
				expect(activeSegment.props.style).toEqual(
					expect.objectContaining({
						width: '0%',
					}),
				)
			})
		})

		it('cancels previous animation when stage changes during animation', async () => {
			const stopMock = jest.fn()
			const originalTiming = Animated.timing
			jest.spyOn(Animated, 'timing').mockImplementation((...args) => {
				const animation = originalTiming(...args)
				animation.stop = stopMock
				return animation
			})

			const { rerender } = render(
				<ProgressBar stages={mockStages} currentStage={0} />,
			)

			rerender(<ProgressBar stages={mockStages} currentStage={1} />)
			await act(async () => {
				jest.advanceTimersByTime(100)
			})

			rerender(<ProgressBar stages={mockStages} currentStage={2} />)

			expect(stopMock).toHaveBeenCalled()
		})
	})

	describe('Edge Cases', () => {
		it('handles single stage', () => {
			const singleStage = [{ id: 1, label: 'Only Stage' }]
			const { queryAllByTestId } = render(
				<ProgressBar stages={singleStage} currentStage={0} />,
			)

			const segments = queryAllByTestId('progress-segment')
			expect(segments.length).toBe(0)
		})

		it('handles empty stages array', () => {
			const { queryAllByTestId } = render(
				<ProgressBar stages={[]} currentStage={0} />,
			)

			const stages = queryAllByTestId('progress-stage', { exact: false })
			expect(stages.length).toBe(0)
		})

		it('clamps currentStage to valid range', () => {
			const { getAllByTestId } = render(
				<ProgressBar stages={mockStages} currentStage={99} />,
			)

			const stages = getAllByTestId('progress-stage', { exact: false })
			for (const stage of stages) {
				expect(stage.props.style).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: '#006237',
						}),
					]),
				)
			}
		})
	})
})
