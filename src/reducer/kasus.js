import { Component } from "react"

let defaultState = {
    kasus: [],
    kasusBaru: {}
}

const kasusReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "KASUS_PAGE":
            let kasusNow = {
                id: action.payload.id,
                provinsi : action.payload.provinsi,
                kota: action.payload.kota,
                kecamatan: action.payload.kecamatan,
                kelurahan: action.payload.kelurahan,
                nik: action.payload.nik,
                nama: action.payload.nama,
                tglmasuk : action.payload.tglmasuk,
                gejala: action.payload.gejala,
                status:action.payload.status,
            }
            let kasusNew = {}
            if (state.kasus.length === 0) {
                kasusNew = state.kasus.concat(kasusNow)
                kasusNew = state.kasus.concat(kasusNow)
            } else {
                kasusNew = state.kasus.concat(kasusNow)
            }
            console.log(kasusNew)
            return {
                kasus: kasusNew
            }
            

            case "CLEAR_KASUS":
                let idhapus= action.payload
                let datahapus = state.kasus
                console.log("idhapus", idhapus);
                console.log(state.kasus[idhapus]);
                console.log("data hapus:", datahapus);
                datahapus.splice(idhapus, 1)
                console.log("data hapus2:", datahapus);

                return{
                    kasus:datahapus
                }

            case "UPDATE_KASUS":
                let newkasus = state.kasus
                    newkasus[action.payload.id].provinsi = action.payload.provinsi;
                    newkasus[action.payload.id].kota = action.payload.kota;
                    newkasus[action.payload.id].kecamatan = action.payload.kecamatan;
                    newkasus[action.payload.id].kelurahan=action.payload.kelurahan;
                    newkasus[action.payload.id].nik = action.payload.nik;
                    newkasus[action.payload.id].nama = action.payload.nama;
                    newkasus[action.payload.id].tglmasuk = action.payload.tglmasuk;
                    newkasus[action.payload.id].gejala=action.payload.gejala;
                    newkasus[action.payload.id].status=action.payload.kasus
                return{
                    kasus:newkasus
                    
                }
            
            case "CARI_KASUS":
                let index = action.payload
                let data = state.kasus[index]
                console.log(data);
                return{
                    kasus: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default kasusReducer