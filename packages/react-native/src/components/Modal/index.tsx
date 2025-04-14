import { Body, type ModalBodyProps } from './Body'
import { Description, type ModalDescriptionProps } from './Description'
import { Footer, type ModalFooterProps } from './Footer'
import { Header, type ModalHeaderProps } from './Header'
import { Root, type ModalRootProps } from './Root'
import { Title, type ModalTitleProps } from './Title'

const Modal = {
	Root,
	Header,
	Title,
	Description,
	Footer,
	Body,
}

export { Modal }
export type {
	ModalBodyProps,
	ModalDescriptionProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalRootProps,
	ModalTitleProps,
}
