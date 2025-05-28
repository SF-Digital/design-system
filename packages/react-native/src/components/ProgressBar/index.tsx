import { colors } from '@sf-digital-ui/tokens'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'

interface Stage {
	id: string | number
	label: string
}

enum Status {
	COMPLETED = 'completed',
	ACTIVE_FORWARD = 'activeForward',
	ACTIVE_BACKWARD = 'activeBackward',
	TODO = 'todo',
}

enum StageStatus {
	ACTIVE = 'active',
	COMPLETED = 'completed',
	TODO = 'todo',
}

enum Directions {
	FORWARD = 'forward',
	BACKWARD = 'backward',
}

interface ProgressStageProps {
	label: string
	status: StageStatus
	testID: string
}

export type ProgressBarProps = {
	stages: Stage[]
	currentStage: number
}

interface ProgressSegmentProps {
	status: Status
	progress: Animated.Value
	testID: string
}

const CheckIcon = () => (
	<Image
		source={{
			uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABvSURBVHgBtZBbDYAwDEWHAyRUChKQgBPmABxMAhImBQmTUEq4JAXC1n3sJM1ePVnbzlXAzLMsVCXwhW8mLBCiVQgQdgnSDz0uN5OgpISEgPMtnAx/ZUwqKam9d4X6Iz/JC5BI/WKbFMRRYv00/uIAjjWzjR8n4F4AAAAASUVORK5CYII=',
		}}
		onError={(error) => console.log('Image load error:', error)}
		resizeMode='contain'
		style={{ width: 10, height: 10 }}
	/>
)

const ProgressStage = ({ label, status, testID }: ProgressStageProps) => {
	const isActive = status === StageStatus.ACTIVE

	const activeCircleStyles =
		(isActive || status === StageStatus.COMPLETED) && styles.activeCircle

	const innerCircleVisible = isActive || status === StageStatus.TODO

	const activeInnerCircleStyles = isActive && styles.activeInnerCircle

	const completedCheckVisible = status === StageStatus.COMPLETED

	return (
		<View style={styles.stageContainer}>
			<View testID={testID} style={[styles.circle, activeCircleStyles]}>
				{innerCircleVisible && (
					<View
						testID={`inner-circle-${testID}`}
						style={[styles.innerCircle, activeInnerCircleStyles]}
					/>
				)}
				{completedCheckVisible && <CheckIcon />}
			</View>
			<Text style={styles.label}>{label}</Text>
		</View>
	)
}

const ProgressSegment = ({
	status,
	progress,
	testID,
}: ProgressSegmentProps) => {
	const getWidthForStatus = () => {
		switch (status) {
			case Status.TODO:
				return '0%'
			case Status.COMPLETED:
				return '100%'
			case Status.ACTIVE_FORWARD:
				return progress.interpolate({
					inputRange: [0, 100],
					outputRange: ['0%', '100%'],
					extrapolate: 'clamp',
				})
			case Status.ACTIVE_BACKWARD:
				return progress.interpolate({
					inputRange: [0, 100],
					outputRange: ['100%', '0%'],
					extrapolate: 'clamp',
				})
		}
	}

	return (
		<View style={styles.segmentContainer}>
			<View style={styles.segmentBackground} />
			<Animated.View
				testID={testID}
				style={[
					styles.segmentProgress,
					{
						width: getWidthForStatus(),
					},
				]}
			/>
		</View>
	)
}

export const ProgressBar = ({ stages, currentStage }: ProgressBarProps) => {
	const progressAnim = useRef(new Animated.Value(0)).current
	const [isReadyToAnimate, setIsReadyToAnimate] = useState(false)
	const [activeSegmentComplete, setActiveSegmentComplete] = useState(false)
	const directionRef = useRef<Directions>(Directions.FORWARD)
	const previousStageRef = useRef(currentStage)
	const animationRef = useRef<Animated.CompositeAnimation | null>(null)

	// First effect: Update direction
	useLayoutEffect(() => {
		setIsReadyToAnimate(false)
		setActiveSegmentComplete(false)

		directionRef.current =
			previousStageRef.current > currentStage
				? Directions.BACKWARD
				: Directions.FORWARD
		previousStageRef.current = currentStage

		// Signal ready for animation in the next tick
		requestAnimationFrame(() => {
			setIsReadyToAnimate(true)
		})
	}, [currentStage])

	// Second effect: Handle animation after direction is updated
	useEffect(() => {
		if (!isReadyToAnimate) return

		progressAnim.setValue(0)
		if (animationRef.current) {
			animationRef.current.stop()
		}

		const completeValue = 100
		const animationTimeInMilliseconds = 300
		const circleAnimationTimeoutInMilliseconds = 50

		animationRef.current = Animated.timing(progressAnim, {
			toValue: completeValue,
			duration: animationTimeInMilliseconds,
			useNativeDriver: false,
		})

		animationRef.current.start(({ finished }) => {
			if (finished) {
				setTimeout(() => {
					setActiveSegmentComplete(true)
				}, circleAnimationTimeoutInMilliseconds)
			}
		})

		return () => {
			if (animationRef.current) {
				animationRef.current.stop()
			}
		}
	}, [isReadyToAnimate, progressAnim])

	const getStageStatus = (index: number): StageStatus => {
		if (index > currentStage) return StageStatus.TODO
		if (index < currentStage) return StageStatus.COMPLETED
		if (
			index === currentStage &&
			!activeSegmentComplete &&
			directionRef.current === Directions.FORWARD
		)
			return StageStatus.TODO
		return StageStatus.ACTIVE
	}

	const getSegmentStatus = (index: number): Status => {
		if (directionRef.current === Directions.FORWARD) {
			if (index === currentStage - 1) {
				return Status.ACTIVE_FORWARD
			}

			if (index > currentStage) return Status.TODO
			if (index < currentStage) return Status.COMPLETED

			return Status.TODO
		}

		if (index === currentStage) {
			return Status.ACTIVE_BACKWARD
		}

		if (index > currentStage) return Status.TODO
		if (index < currentStage) return Status.COMPLETED

		return Status.TODO
	}

	return (
		<View style={styles.container}>
			<View style={styles.barContainer}>
				{stages.map((stage, index) => {
					const stageStatus = getStageStatus(index)
					const showProgressSegment = index < stages.length - 1

					return (
						<React.Fragment key={stage.id}>
							<View style={styles.stageWrapper}>
								<ProgressStage
									testID={`progress-stage-${index}`}
									label={stage.label}
									status={stageStatus}
								/>
							</View>
							{showProgressSegment && (
								<ProgressSegment
									testID={`progress-segment-${index}`}
									status={getSegmentStatus(index)}
									progress={progressAnim}
								/>
							)}
						</React.Fragment>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	barContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	stageWrapper: {
		zIndex: 1,
	},
	segmentContainer: {
		flex: 1,
		height: 2,
		position: 'relative',
		zIndex: 0,
		marginHorizontal: -10,
	},
	segmentBackground: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: colors.neutral[30],
	},
	segmentProgress: {
		position: 'absolute',
		height: '100%',
		backgroundColor: colors['primary-green'][500],
	},
	stageContainer: {
		alignItems: 'center',
		width: 24,
	},
	circle: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: colors.neutral[20],
		borderWidth: 1.5,
		borderColor: colors.neutral[30],
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerCircle: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: colors.neutral[50],
		zIndex: 1,
	},
	activeInnerCircle: {
		backgroundColor: '#FFFFFF',
	},
	activeCircle: {
		backgroundColor: colors['primary-green'][500],
		borderColor: colors['primary-green'][500],
	},
	label: {
		marginTop: 8,
		fontSize: 12,
		position: 'absolute',
		top: 20,
		width: 80,
		textAlign: 'center',
	},
})
