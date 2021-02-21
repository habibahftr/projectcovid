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
    gejala: {}
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
                    kelurahan:datahapus
                }

            case "UPDATE_KELURAHAN":
                let newkel = state.kelurahan
                    newkel[action.payload.id].provinsi = action.payload.provinsi;
                    newkel[action.payload.id].kota = action.payload.kota;
                    newkel[action.payload.id].kecamatan = action.payload.kecamatan
                    newkel[action.payload.id].kelurahan=action.payload.kelurahan
                return{
                    kelurahan:newkel
                    
                }
            
            case "CARI_KELURAHAN":
                let index = action.payload
                let data = state.kelurahan[index]
                console.log(data);
                return{
                    kelurahan: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default kelurahanReducer