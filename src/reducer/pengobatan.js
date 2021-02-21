import { Component } from "react"

let defaultState = {
    pengobatan: [],
    pengobatanBaru: {}
}

const pengobatanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PENGOBATAN_PAGE":
            let pengobatanNow = {
                id: action.payload.id,
                nik: action.payload.nik,
                nama: action.payload.nama,
                terapi : action.payload.terapi,
                tglterapi : action.payload.tglterapi,
            }
            let pengobatanNew = {}
            if (state.pengobatan.length === 0) {
                pengobatanNew = state.pengobatan.concat(pengobatanNow)
                pengobatanNew = state.pengobatan.concat(pengobatanNow)
            } else {
                pengobatanNew = state.pengobatan.concat(pengobatanNow)
            }
            console.log(pengobatanNew)
            return {
                pengobatan: pengobatanNew
            }
            

            case "CLEAR_PENGOBATAN":
                let idhapus= action.payload
                let datahapus = state.pengobatan
                console.log("idhapus", idhapus);
                console.log(state.pengobatan[idhapus]);
                console.log("data hapus:", datahapus);
                datahapus.splice(idhapus, 1)
                console.log("data hapus2:", datahapus);

                return{
                    pengobatan:datahapus
                }

            case "UPDATE_PENGOBATAN":
                let newpengobatan = state.pengobatan
                    newpengobatan[action.payload.id].id = action.payload.id; 
                    newpengobatan[action.payload.id].nik = action.payload.nik;
                    newpengobatan[action.payload.id].nama = action.payload.nama;
                    newpengobatan[action.payload.id].terapi = action.payload.terapi;
                    newpengobatan[action.payload.id].tglterapi = action.payload.tglterapi;
                return{
                    pengobatan:newpengobatan
                    
                }
            
            case "CARI_PENGOBATAN":
                let index = action.payload
                let data = state.pengobatan[index]
                console.log(data);
                return{
                    pengobatan: data
                }
                console.log("data", state.city);
                
            default:
                return state
    }
}

export default pengobatanReducer