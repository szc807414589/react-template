//计数器demo actions
import { CreateAction } from "../ActionCreaters"

export const ADD_COUNTER = 'ADD_COUNTER'
export const SUB_COUNTER = 'SUB_COUNTER'
export const addNum = (count) => CreateAction(ADD_COUNTER, { count })
export const substractNum = (count) => CreateAction(SUB_COUNTER, { count })

