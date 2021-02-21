import { Component } from "react"

let defaultState = {
    kecamatan: [{
        provinsi: "Jawa Barat",
        kota: "Bandung",
        kecamatan: "Bale Endah"
    },
    {
        provinsi: "Jawa tengah",
        kota: "Semarang",
        kecamatan: "Gajah Mungkur"
    },
        
    ],
    gejala: {}
}

const kecamatanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "KECAMATAN_PAGE":
            let kecBaru = {
                provinsi : action.payload.provinsi,
                kota: action.payload.kota,
                kecamatan: action.payload.kecamatan
            }
            let kec = {}
            if (state.kecamatan.length === 0) {
                kec = state.kecamatan.concat(kecBaru)
                kec = state.kecamatan.concat(kecBaru)
            } else {
                kec = state.kecamatan.concat(kecBaru)
            }
            console.log(kec)
            return {
                kecamatan: kec
            }
            

            case "CLEAR_KECAMATAN":
                let idhapus= action.payload
                let datahapus = state.kecamatan
                console.log("idhapus", idhapus);
                console.log(state.kecamatan[idhapus]);
                console.log("data hapus:", datahapus);
                datahapus.splice(idhapus, 1)
                console.log("data hapus2:", datahapus);

                return{
                    kecamatan:datahapus
                }

            case "UPDATE_KECAMATAN":
                let newkec = state.kecamatan
                    newkec[action.payload.id].provinsi = action.payload.provinsi;
                    newkec[action.payload.id].kota = action.payload.kota;
                    newkec[action.payload.id].kecamatan = action.payload.kecamatan
                return{
                    kecamatan:newkec
                    
                }
            
            case "CARI_KECAMATAN":
                let index = action.payload
                let data = state.kecamatan[index]
                console.log(data);
                return{
                    kecamatan: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default kecamatanReducer