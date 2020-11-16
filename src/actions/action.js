import axios from 'axios';

export const getwaterRequests = () => {
  return (dispatch) => {
    let res = axios.get('http://localhost:3008/Requests')
      .then(res => {
        dispatch({
          type: 'FETCH_WATER_REQUESTS',
          payload: res.data
        });
      })
  }
}

//  export const postWaterRequests = (requests) => {
//   return (dispatch) => {
//     let res = axios.post('http://localhost:3008/Requests',{
//       requests
//     });
//       // .then(res => {
//       //   console.log(res.data);
//       //   dispatch({
//       //     type: 'POST_WATER_REQUESTS',
//       //     payload: res.data
//       //   });
//       // })
//   }
//  }


//  export const updateRequest = (requests) => { //your action, using thunk here
//   return dispatch => {
//    fetch('http://localhost:3008/Requests', {
//         method: "POST",
//         body: JSON.stringify(requests),            
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Profile update failed, please try again!");
//     })
//     .then(res => {
//         dispatch(postWaterRequests(requests));
//     });
//    }
// }

// export const postWaterRequests = requests => {
//   console.log(requests);
//   return {
//     type: "POST_WATER_REQUESTS",
//     payload: {
//     requests
//     }
//   };
// };

export const editRequests = (data,requestsType) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_WATER_REQUESTS",
      payload: {
        data,
        requestsType
      }
    })
  }
}


export const deleteWaterRequest = (rowdata,requestsType) => {
  console.log(rowdata,requestsType)
  return (dispatch) => {
    dispatch({
      type: "DELETE_WATER_REQUESTS",
      payload: {
        rowdata,
        requestsType
      }
    });
  }
}

export const addWaterRequest = (newdata,requestsType) => {
 console.log(newdata,"<-------action.js");
  return (dispatch) => {
    dispatch({
      type: "ADD_WATER_REQUESTS",
      payload: {
        newdata,
        requestsType
      }
    });
  }
}

export const getProductsList = () => {
  return (dispatch) => {
    let res = axios.get('http://localhost:3007/products')
      .then(res => {
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: res.data
        });
      })
  }
}

export const editProductsList = (data) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_PRODUCTS_LIST",
      payload: {
        data,
        
      }
    })
  }
}

export const deleteProduct = (rowdata) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: {
        rowdata,
      }
    });
  }
}

export const addNewProduct = (newdata) => {
 console.log(newdata,"<-------action.js");
  return (dispatch) => {
    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: {
        newdata,
      }
    });
  }
}

export const getFlatsList = () => {
  return (dispatch) => {
    let res = axios.get('http://localhost:3006/FlatsList')
      .then(res => {
        dispatch({
          type: 'FETCH_FLATS',
          payload: res.data
        });
      })
  }
}