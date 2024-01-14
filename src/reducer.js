export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // REMOVE AFTER DEVELOPING....
    token:"BQAf66bKVDfuFLocM2UfnX-XNgMpjI_crHGYXi2y1ou_fYibLrJNAFg8zmskyHZHzRx5sZdy81Yrg5G8S8ADBdu0C5ggqt4SPluoHyOaqZ3GDCOfr96heeDt1c5Z5TF1r_A3_YN_a6rYGFeVCCaPrvug_6mlbxXGVf49xSAHZ4A-bu0nCn_sQv9dPLAQMl8Z7vFyzRiqpsoDEmVY9Vkj"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
            ...state,
            user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
export default reducer;