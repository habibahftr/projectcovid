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
    kecEdit: {}
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
                ...state,
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
                    ...state,
                    kecamatan:datahapus
                }

            case "UPDATE_KECAMATAN":
                let newkec = state.kecamatan
                    newkec[action.payload.index].provinsi = action.payload.provinsi;
                    newkec[action.payload.index].kota = action.payload.kota;
                    newkec[action.payload.index].kecamatan = action.payload.kecamatan
                    console.log("newkec", newkec);
                return{
                    ...state,
                    kecamatan:newkec
                    
                }
            
            case "CARI_KECAMATAN":
                let index = action.payload.index
                let data = state.kecamatan[index]
                // console.log(data);
                return{
                    ...state,
                    kecEdit: data
                }
                console.log("data", state.kecamatan);
                
            default:
                return state
    }
}

export default kecamatanReducer