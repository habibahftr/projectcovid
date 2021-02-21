let defaultState = {
    provinsi: [{
        provinsi:"JawaBarat"
    },
    {
        provinsi:"JawaTengah"
    },        
    ],
    provinsiSelect:[{
        provinsi:"JawaBarat"
    },
    {
        provinsi:"JawaTengah"
    }, 
]
}

const provinsiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PROVINSI_PAGE":
            let provBaru = {
                provinsi : action.payload.provinsi,
            }
            let prov = {}
            if (state.provinsi.length === 0) {
                prov = state.provinsi.concat(provBaru)
                prov = state.provinsi.concat(provBaru)
            }else  {
                prov = state.provinsi.concat(provBaru)
            }
            console.log(prov)
            return {
                provinsi: prov
            }

        // case "SELECT_PROVINSI":
        //     let dataselect= {
        //         provinsi: action.payload.provinsi
        //     }
        //     let provselect={}
        //     console.log("data select", state.provinsiSelect);
        //     if(state.provinsiSelect.length === 0){
        //         provselect = state.provinsi.concat(dataselect)
        //         provselect = state.provinsi.concat(dataselect)
        //     }
        //     else{
        //         let datafilter = state.provinsi.filter(el=> el.provinsi.toUpperCase === dataselect.provinsi.toUpperCase)
        //         if (datafilter.length< 0) {
        //             provselect = state.provinsi.concat(dataselect) 
        //             provselect = state.provinsi.concat(dataselect)
        //         }else{
        //             provselect = state.provinsi.concat(dataselect)
        //         }
        //     }
        //     return{
        //         provinsiSelect: provselect
        //     }

        case "CLEAR_PROVINSI":
            let idhapus= action.payload
            let datahapus = state.provinsi
            console.log("idhapus", idhapus);
            console.log(state.provinsi[idhapus]);
            console.log("data hapus:", datahapus);
            datahapus.splice(idhapus, 1)
            console.log("data hapus2:", datahapus);

            return{
                provinsi:datahapus
            }
        default:
            return state
        }
    }
    
    export default provinsiReducer
                