import {
    FIRST_ACTION
} from "../actions/actionTypes";

const initialState = {
    bids:[
        {
            id: 1,
            name:'zayavka1',
            pointGetLoad:'Point_name_1',
            pointLeaveLoad:'Point_name_2'
        },
        {
            id: 2,
            name:'zayavka2',
            pointGetLoad:'Point_name_3',
            pointLeaveLoad:'Point_name_4'
        }
    ]
}

export default function bidReducer(state = initialState, action) {
    switch (action.type) {

        case FIRST_ACTION:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}


// case FETCH_QUIZES_SUCCESS:
//     return {
//         ...state,
//         quizes: action.quizes,
//         loading: false
//     }
// case FETCH_QUIZES_ERROR:
//     return {
//         ...state,
//         error: action.error,
//         loading: false
//     }
// case FETCH_QUIZ_SUCCESS:
//     return {
//         ...state,
//         quiz: action.quiz,
//         loading: false
//     }
//
// case QUIZ_SET_STATE:
//     return {
//         ...state,
//         answerState: action.answerState,
//         results: action.results
//     }
// case FINISH_QUIZ:
//     return {
//         ...state,
//         isFinished: true
//     }
// case QUIZ_NEXT_QUESTION:
//     return {
//         ...state,
//         answerState: null,
//         activeQuestion: action.number
//     }
// case QUIZ_RETRY:
//     return {
//         ...state,
//         activeQuestion: 0,
//         answerState: null,
//         isFinished: false,
//         results: {}
//     }
//
