import { Close, PrimitiveModalCloseProps } from './Close'
import { Content, PrimitiveModalContentProps } from './Content'
import { Description, PrimitiveModalDescriptionProps } from './Description'
import { Overlay, PrimitiveModalOverlayProps } from './Overlay'
import { Portal, PrimitiveModalPortalProps } from './Portal'
import { PrimitiveModalRootProps, Root } from './Root'
import { PrimitiveModalTitleProps, Title } from './Title'
import { PrimitiveModalTriggerProps, Trigger } from './Trigger'

export const PrimitiveModal = {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Description,
	Close,
}

export type {
	PrimitiveModalCloseProps,
	PrimitiveModalContentProps,
	PrimitiveModalDescriptionProps,
	PrimitiveModalOverlayProps,
	PrimitiveModalPortalProps,
	PrimitiveModalRootProps,
	PrimitiveModalTitleProps,
	PrimitiveModalTriggerProps,
}
