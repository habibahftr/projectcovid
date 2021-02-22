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
    hallo: "bibah"
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
                indications: datahapus
            }

        case "UPDATE_GEJALA":
            let newgejala = state.indications
            newgejala[action.payload.id].indication = action.payload.indication;
            newgejala[action.payload.id].description = action.payload.description;
            return {
                indications: newgejala

            }

        case "CARI_GEJALA":
            let index = action.payload.index
            let data = state.indications[index]
            console.log(data);
            return {
                gejala: data
            }
            console.log("data", state.gejala);

        default:
            return state
    }
}

export default gejalaReducer