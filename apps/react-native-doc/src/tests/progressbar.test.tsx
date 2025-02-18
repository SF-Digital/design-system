import React from 'react'
import { act, render } from '@testing-library/react-native'
import { Animated } from 'react-native'
import { ProgressBar } from '@sf-digital-ui/react-native'

// // Mock the CheckIcon component since it uses an image
// jest.mock('./CheckIcon', () => ({
//   CheckIcon: () => null,
// }))

describe('ProgressBar', () => {
  const mockStages = [
    { id: 1, label: 'Stage 1' },
    { id: 2, label: 'Stage 2' },
    { id: 3, label: 'Stage 3' },
  ]

  beforeEach(() => {
    // Reset animation timing implementation
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders correctly with initial stages', () => {
    const { getAllByText } = render(
      <ProgressBar stages={mockStages} currentStage={0} />,
    )

    mockStages.forEach((stage) => {
      expect(getAllByText(stage.label)).toBeTruthy()
    })
  })

  it('renders correct number of segments', () => {
    const { queryAllByTestId } = render(
      <ProgressBar stages={mockStages} currentStage={0} />,
    )

    // There should be one less segment than stages
    const segments = queryAllByTestId('progress-segment')
    expect(segments.length).toBe(mockStages.length - 1)
  })

  describe('Stage Status', () => {
    it('marks previous stages as completed', () => {
      const { getByTestId } = render(
        <ProgressBar stages={mockStages} currentStage={2} />,
      )

      const firstStage = getByTestId('stage-0')
      const secondStage = getByTestId('stage-1')

      expect(firstStage.props.style).toContainEqual(
        expect.objectContaining({
          backgroundColor: expect.stringContaining('primary-green'),
        }),
      )
      expect(secondStage.props.style).toContainEqual(
        expect.objectContaining({
          backgroundColor: expect.stringContaining('primary-green'),
        }),
      )
    })

    it('marks current stage as active', () => {
      const { getByTestId } = render(
        <ProgressBar stages={mockStages} currentStage={1} />,
      )

      const activeStage = getByTestId('stage-1')
      const innerCircle = getByTestId('inner-circle-1')

      expect(activeStage.props.style).toContainEqual(
        expect.objectContaining({
          backgroundColor: expect.stringContaining('primary-green'),
        }),
      )
      expect(innerCircle).toBeTruthy()
    })

    it('marks future stages as todo', () => {
      const { getByTestId } = render(
        <ProgressBar stages={mockStages} currentStage={0} />,
      )

      const futureStage = getByTestId('stage-2')
      expect(futureStage.props.style).toContainEqual(
        expect.objectContaining({
          backgroundColor: expect.stringContaining('neutral'),
        }),
      )
    })
  })

  describe('Animations', () => {
    it('animates progress when moving forward', async () => {
      const { getByTestId, rerender } = render(
        <ProgressBar stages={mockStages} currentStage={0} />,
      )

      // Move to next stage
      rerender(<ProgressBar stages={mockStages} currentStage={1} />)

      // Fast-forward animation
      await act(async () => {
        jest.advanceTimersByTime(300) // Animation duration
      })

      // Wait for animation completion and circle update
      await act(async () => {
        jest.advanceTimersByTime(50) // Circle animation timeout
      })

      // Verify the animation completed
      const activeSegment = getByTestId('segment-0')
      expect(activeSegment.props.style).toContainEqual(
        expect.objectContaining({
          width: '100%',
        }),
      )
    })

    it('animates progress when moving backward', async () => {
      const { getByTestId, rerender } = render(
        <ProgressBar stages={mockStages} currentStage={2} />,
      )

      // Move backward
      rerender(<ProgressBar stages={mockStages} currentStage={1} />)

      // Fast-forward animation
      await act(async () => {
        jest.advanceTimersByTime(300)
      })

      await act(async () => {
        jest.advanceTimersByTime(50)
      })

      const activeSegment = getByTestId('segment-1')
      expect(activeSegment.props.style).toContainEqual(
        expect.objectContaining({
          width: '0%',
        }),
      )
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

      // Change stage before animation completes
      rerender(<ProgressBar stages={mockStages} currentStage={1} />)
      await act(async () => {
        jest.advanceTimersByTime(100) // Part way through animation
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

      const stages = queryAllByTestId(/^stage-/)
      expect(stages.length).toBe(0)
    })

    it('clamps currentStage to valid range', () => {
      const { getAllByTestId } = render(
        <ProgressBar stages={mockStages} currentStage={99} />,
      )

      // All stages should be completed
      const stages = getAllByTestId(/^stage-/)
      stages.forEach((stage) => {
        expect(stage.props.style).toContainEqual(
          expect.objectContaining({
            backgroundColor: expect.stringContaining('primary-green'),
          }),
        )
      })
    })
  })
})
