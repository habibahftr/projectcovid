let defaultState = {
    indications: [
        {
            indication: "Batuk",
            description: "Batuk kering selama lebih dari 7 hari"
        },
        {
            indication: "Sesak Napas",
            description: "Sesak napas berat selama 2 hari"
        },
        {
            indication: "Demam",
            description: "demam lebih dari 38 derajat"
        },
    ],
    gejala: {},
}

const gejalaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INDICATION_PAGE":
            let dataBaru = {
                indication: action.payload.indication,
                description: action.payload.description,
            }
            let gejala = {}
            if (state.indications.length === 0) {
                gejala = state.indications.concat(dataBaru)
                gejala = state.indications.concat(dataBaru)
            } else {
                gejala = state.indications.concat(dataBaru)
            }
            console.log(gejala)
            return {
                ...state,
                indications: gejala
            }


        case "CLEAR_GEJALA":
            let idhapus = action.payload
            let datahapus = state.indications
            console.log("idhapus", idhapus);
            console.log(state.indications[idhapus]);
            console.log("data hapus:", datahapus);
            datahapus.splice(idhapus, 1)
            console.log("data hapus2:", datahapus);

            return {
                ...state,
                indications: datahapus
            }

        case "UPDATE_GEJALA":
            let newgejala = state.indications
            newgejala[action.payload.index].indication = action.payload.indication;
            newgejala[action.payload.index].description = action.payload.description;
            console.log("newgejala", newgejala);
            return {
                ...state,
                indications: newgejala

            }

        case "CARI_GEJALA":
            let index = action.payload.index
            let data = state.indications[index]
            console.log(action.payload.index);
            console.log("data", action.payload);
            return {
                ...state,
                gejala: data
            }
            

        default:
            return state
    }
}

export default gejalaReducer