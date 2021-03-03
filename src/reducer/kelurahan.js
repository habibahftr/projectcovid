import { Component } from "react"


let defaultState = {
    kelurahan: [{
        provinsi: "Jawa Barat",
        kota: "Bandung",
        kecamatan: "Bale Endah",
        kelurahan:"ledeng"
    },
    {
        provinsi: "Jawa tengah",
        kota: "Semarang",
        kecamatan: "Gajah Mungkur",
        kelurahan:"Sampangan"

    },
        
    ],
    kelEdit: {}
}

const kelurahanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "KELURAHAN_PAGE":
            let kelBaru = {
                provinsi : action.payload.provinsi,
                kota: action.payload.kota,
                kecamatan: action.payload.kecamatan,
                kelurahan: action.payload.kelurahan
            }
            let kel = {}
            if (state.kelurahan.length === 0) {
                kel = state.kelurahan.concat(kelBaru)
                kel = state.kelurahan.concat(kelBaru)
            } else {
                kel = state.kelurahan.concat(kelBaru)
            }
            console.log(kel)
            return {
                ...state,
                kelurahan: kel
            }
            

            case "CLEAR_KELURAHAN":
                let idhapus= action.payload
                let datahapus = state.kelurahan
                console.log("idhapus", idhapus);
                console.log(state.kelurahan[idhapus]);
                console.log("data hapus:", datahapus);
                datahapus.splice(idhapus, 1)
                console.log("data hapus2:", datahapus);

                return{
                    ...state,
                    kelurahan:datahapus
                }

            case "UPDATE_KELURAHAN":
                let newkel = state.kelurahan
                    newkel[action.payload.index].provinsi = action.payload.provinsi;
                    newkel[action.payload.index].kota = action.payload.kota;
                    newkel[action.payload.index].kecamatan = action.payload.kecamatan
                    newkel[action.payload.index].kelurahan=action.payload.kelurahan
                return{
                    ...state,
                    kelurahan:newkel
                    
                }
            
            case "CARI_KELURAHAN":
                let index = action.payload
                let data = state.kelurahan[index]
                console.log(data);
                return{
                    ...state,
                    kelEdit: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default kelurahanReducer