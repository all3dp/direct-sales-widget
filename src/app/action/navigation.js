import {routerActions} from 'react-router-redux'

export const goToAddress = () => routerActions.push('/address')
export const goToCheckout = () => routerActions.push('/checkout')
export const goToHome = () => routerActions.push('/')
