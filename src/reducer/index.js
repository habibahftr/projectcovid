import { combineReducers, createStore } from "redux";
import AuthReducer from "./auth";
// import UserReducer from "./user";
import gejalaReducer from "./gejala";
import provinsiReducer from "./provinsi";
import kotaReducer from "./kota";
import kecamatanReducer from "./kecamatan";
import kelurahanReducer from "./kelurahan";
import kasusReducer from "./kasus";
import pengobatanReducer from "./pengobatan";

let reducer = combineReducers({
    AReducer: AuthReducer,
    gejalaReducer,
    PReducer: provinsiReducer,
    KReducer: kotaReducer,
    KecamatanReducer : kecamatanReducer,
    KelurahanReducer : kelurahanReducer,
    KasusReducer : kasusReducer,
    ObatReducer : pengobatanReducer,
})

export default reducer;