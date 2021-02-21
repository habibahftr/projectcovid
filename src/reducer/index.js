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

let store = createStore(combineReducers({
    AReducer: AuthReducer,
    // UReducer: UserReducer,
    InReducer: gejalaReducer,
    PReducer: provinsiReducer,
    KReducer: kotaReducer,
    KecReducer : kecamatanReducer,
    KelReducer : kelurahanReducer,
    KasusReducer : kasusReducer,
    ObatReducer : pengobatanReducer,


}))



export default store;