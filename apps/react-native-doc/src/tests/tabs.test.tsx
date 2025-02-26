import { Tabs } from '@sf-digital-ui/react-native'
import { colors } from '@sf-digital-ui/tokens'
import { fireEvent, render } from '@testing-library/react-native'

describe('Tabs Component', () => {
	describe('Root', () => {
		it('renders children correctly', () => {
			const { getByTestId } = render(
				<Tabs.Root>
					<Tabs.List testID='tabs-list'>
						<Tabs.Trigger testID='tab-1' value='tab1'>
							<Tabs.TriggerText>Tab 1</Tabs.TriggerText>
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>,
			)

			expect(getByTestId('tabs-list')).toBeTruthy()
			expect(getByTestId('tab-1')).toBeTruthy()
		})

		it('handles controlled value correctly', () => {
			const onValueChange = jest.fn()
			const { getByTestId } = render(
				<Tabs.Root value='tab1' onValueChange={onValueChange}>
					<Tabs.List>
						<Tabs.Trigger testID='tab-1' value='tab1'>
							<Tabs.TriggerText>Tab 1</Tabs.TriggerText>
						</Tabs.Trigger>
						<Tabs.Trigger testID='tab-2' value='tab2'>
							<Tabs.TriggerText>Tab 2</Tabs.TriggerText>
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>,
			)

			fireEvent.press(getByTestId('tab-2'))
			expect(onValueChange).toHaveBeenCalledWith('tab2')
		})

		it('handles uncontrolled value correctly', () => {
			const { getByTestId } = render(
				<Tabs.Root defaultValue='tab1'>
					<Tabs.List>
						<Tabs.Trigger testID='tab-1' value='tab1'>
							<Tabs.TriggerText>Tab 1</Tabs.TriggerText>
						</Tabs.Trigger>
						<Tabs.Trigger testID='tab-2' value='tab2'>
							<Tabs.TriggerText>Tab 2</Tabs.TriggerText>
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>,
			)

			fireEvent.press(getByTestId('tab-2'))

			expect(getByTestId('tab-2').props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: colors['primary-green']['50'],
						}),
					]),
				]),
			)
		})
	})

	describe('List', () => {
		it('applies correct variant styles', () => {
			const { getByTestId } = render(
				<Tabs.Root variant='panel'>
					<Tabs.List testID='tabs-list' />
				</Tabs.Root>,
			)

			const list = getByTestId('tabs-list')
			expect(list.props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: colors.neutral['20'],
							padding: 4,
							borderRadius: 8,
						}),
					]),
				]),
			)
		})

		it('merges custom styles correctly', () => {
			const customStyle = { marginTop: 10 }
			const { getByTestId } = render(
				<Tabs.Root>
					<Tabs.List testID='tabs-list' style={customStyle} />
				</Tabs.Root>,
			)

			expect(getByTestId('tabs-list').props.style).toContainEqual(customStyle)
		})
	})

	describe('Trigger', () => {
		it('applies correct styles based on active state and variant', () => {
			const { getByTestId } = render(
				<Tabs.Root value='tab1' variant='solid' color='sf-green'>
					<Tabs.List>
						<Tabs.Trigger testID='tab-1' value='tab1' />
					</Tabs.List>
				</Tabs.Root>,
			)

			expect(getByTestId('tab-1').props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							backgroundColor: colors['primary-green']['50'],
						}),
					]),
				]),
			)
		})

		it('throws error when used outside Tabs.Root', () => {
			console.error = jest.fn() // Suppress error logging

			expect(() => {
				render(<Tabs.Trigger value='tab1' />)
			}).toThrow('Tab components must be used within a Tabs provider')
		})

		it('handles different size variants correctly', () => {
			const { getByTestId } = render(
				<Tabs.Root size='lg'>
					<Tabs.List>
						<Tabs.Trigger testID='tab-1' value='tab1' />
					</Tabs.List>
				</Tabs.Root>,
			)

			expect(getByTestId('tab-1').props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							paddingHorizontal: 40,
							paddingVertical: 10,
						}),
					]),
				]),
			)
		})
	})

	describe('TriggerText', () => {
		it('applies correct text styles based on active state and variant', () => {
			const { getByText } = render(
				<Tabs.Root value='tab1' variant='solid' color='sf-green'>
					<Tabs.List>
						<Tabs.Trigger value='tab1'>
							<Tabs.TriggerText>Tab 1</Tabs.TriggerText>
						</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>,
			)

			expect(getByText('Tab 1').props.style).toEqual(
				expect.arrayContaining([
					expect.arrayContaining([
						expect.objectContaining({
							color: colors['primary-green']['500'],
						}),
					]),
				]),
			)
		})

		it('throws error when used outside Tabs.Trigger', () => {
			console.error = jest.fn() // Suppress error logging

			expect(() => {
				render(<Tabs.TriggerText>Tab 1</Tabs.TriggerText>)
			}).toThrow(
				'TabsTrigger components must be used within a TabsTrigger provider',
			)
		})
	})

	describe('Content', () => {
		it('renders content only when tab is active', () => {
			const { getByTestId, queryByTestId } = render(
				<Tabs.Root value='tab1'>
					<Tabs.List>
						<Tabs.Trigger value='tab1' />
						<Tabs.Trigger value='tab2' />
					</Tabs.List>
					<Tabs.Content testID='content-1' value='tab1'>
						Content 1
					</Tabs.Content>
					<Tabs.Content testID='content-2' value='tab2'>
						Content 2
					</Tabs.Content>
				</Tabs.Root>,
			)

			expect(getByTestId('content-1')).toBeTruthy()
			expect(queryByTestId('content-2')).toBeNull()
		})

		it('updates visible content when active tab changes', () => {
			const { getByTestId, queryByTestId } = render(
				<Tabs.Root defaultValue='tab1'>
					<Tabs.List>
						<Tabs.Trigger testID='trigger-1' value='tab1' />
						<Tabs.Trigger testID='trigger-2' value='tab2' />
					</Tabs.List>
					<Tabs.Content testID='content-1' value='tab1'>
						Content 1
					</Tabs.Content>
					<Tabs.Content testID='content-2' value='tab2'>
						Content 2
					</Tabs.Content>
				</Tabs.Root>,
			)

			expect(getByTestId('content-1')).toBeTruthy()
			expect(queryByTestId('content-2')).toBeNull()

			fireEvent.press(getByTestId('trigger-2'))

			expect(queryByTestId('content-1')).toBeNull()
			expect(getByTestId('content-2')).toBeTruthy()
		})
	})
})
