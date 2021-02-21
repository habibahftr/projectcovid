import { Component } from "react"

let defaultState = {
    city: [{
        provinsi: "Jawa Barat",
        kota: "Bandung"
    },
    {
        provinsi: "Jawa tengah",
        kota: "Semarang"
    },
        
    ],
    gejala: {}
}

const kotaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "KOTA_PAGE":
            let kotaBaru = {
                provinsi : action.payload.provinsi,
                kota: action.payload.kota,
            }
            let kota = {}
            if (state.city.length === 0) {
                kota = state.city.concat(kotaBaru)
                kota = state.city.concat(kotaBaru)
            } else {
                kota = state.city.concat(kotaBaru)
            }
            console.log(kota)
            return {
                city: kota
            }
            

            case "CLEAR_KOTA":
                let idhapus= action.payload
                let datahapus = state.city
                console.log("idhapus", idhapus);
                console.log(state.city[idhapus]);
                console.log("data hapus:", datahapus);
                datahapus.splice(idhapus, 1)
                console.log("data hapus2:", datahapus);

                return{
                    city:datahapus
                }

            case "UPDATE_KOTA":
                let newcity = state.city
                    newcity[action.payload.id].provinsi = action.payload.provinsi;
                    newcity[action.payload.id].kota = action.payload.kota;
                return{
                    city:newcity
                    
                }
            
            case "CARI_KOTA":
                let index = action.payload
                let data = state.city[index]
                console.log(data);
                return{
                    city: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default kotaReducer