import { useContext } from 'react'
import { GenericModalContext } from '@/context/GenericModalContext'

export const useGenericModal = () => {
	return useContext(GenericModalContext)
}
