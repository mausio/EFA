import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from '../types/store.types'

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppThunkDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
