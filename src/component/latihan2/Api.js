import axios from "axios";

const Url = "https://api.kawalcorona.com/indonesia/";
export function GetApi() {
  try {
    const res = axios.get(`${Url}`)
    // console.log(response);
    return res;
  } catch (err) {
    console.log(err);
  }
}
// export function PetApi(parm) {
//   try {
//     const res = axios.get(`${Url}/${parm}`)
//     // console.log(response);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// }
