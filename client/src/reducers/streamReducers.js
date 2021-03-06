import { LIST_STREAMS, LIST_STREAM, CREATE_STREAM, UPDATE_STREAM, DELETE_STREAM } from '../actions/type';
import _ from 'lodash';
export default (state = {}, action) => {

    switch (action.type) {

        case LIST_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }

        case LIST_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case UPDATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case DELETE_STREAM:
            return _.omit(state, action.payload)

        default:
            return state;
    }

}