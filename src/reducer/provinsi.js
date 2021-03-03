let defaultState = {
    provinsi: [{
        provinsi: "JawaBarat"
    },
    {
        provinsi: "JawaTengah"
    },
    ],
    provEdit:{}
}

const provinsiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PROVINSI_PAGE":
            let provBaru = {
                provinsi: action.payload.provinsi,
            }
            let prov = {}
            if (state.provinsi.length === 0) {
                prov = state.provinsi.concat(provBaru)
                prov = state.provinsi.concat(provBaru)
            } else {
                prov = state.provinsi.concat(provBaru)
            }
            console.log(prov)
            return {
                ...state,
                provinsi: prov
            }

        case "CLEAR_PROVINSI":
            let idhapus = action.payload
            let datahapus = state.provinsi
            console.log("idhapus", idhapus);
            console.log(state.provinsi[idhapus]);
            console.log("data hapus:", datahapus);
            datahapus.splice(idhapus, 1)
            console.log("data hapus2:", datahapus);
            return {
                ...state,
                provinsi: datahapus
            }

        case "UPDATE_PROVINSI":
            let newprovinsi = state.provinsi
            newprovinsi[action.payload.index].provinsi = action.payload.provinsi;
            console.log("newprovinsi", newprovinsi);
            return {
                ...state,
                provinsi: newprovinsi

            }

        case "CARI_PROVINSI":
            let index = action.payload.index
            let data = state.provinsi[index]
            console.log(action.payload.index);
            console.log("data", action.payload);
            return {
                ...state,
                provEdit: data
            }

        default:
            return state
    }
}

export default provinsiReducer
