import axios from 'axios';
import { PRODUCT_DETAIL_SELECTED_REQUEST } from '../constants/action-types';


const bookingProductDetailMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === PRODUCT_DETAIL_SELECTED_REQUEST ){
        // console.log(action)

        axios
            .get(action.payload.url)
            .then(function (response) {
                // console.log(response);
                if(response.status == 200){

                    const pax = "pax";
                    const ADULT = "ADULT";
                    const CHILD = "CHILD";
                    const INFANT = "INFANT";
                    const PACKAGE = "package";

                    const dataProductDetail = {
                        listPaxAdult: {},
                        listPaxChild:{},
                        listPaxInfant:{},
                        nameOfProduct:{},
                        listPackage: [],

                        listAdditionalProducts:[],
                        listAdditionalProductsDetails:[]
                    };

                    console.log("Original Response : ", response.data.response);

                    /* nameOfProduct */
                    let getNameOfProduct = response.data.response.name != null ? response.data.response.name : 'What is your name ?'
                    dataProductDetail.nameOfProduct = getNameOfProduct;
                    

                    /* listPaxAdult - listPaxChild - listPaxInfant */
                    if(response.data.response.packet.length != null){
                        response.data.response.packet.map((data) => { //   console.log("List of Packet", data)
                
                            if(data.pricing_type === pax){ // console.log("Pax Type",data.amount);
                
                                data.amount.map((secondDataMapping) => {

                                    if(secondDataMapping.pax_type === ADULT){ //console.log("Second Data Mapping ", secondDataMapping);
                                        dataProductDetail.listPaxAdult = Object.assign(secondDataMapping, dataProductDetail.listPaxAdult)
                                    };

                                    if(secondDataMapping.pax_type === CHILD){
                                        dataProductDetail.listPaxChild = Object.assign(secondDataMapping, dataProductDetail.listPaxChild)
                                    }

                                    if(secondDataMapping.pax_type === INFANT){
                                        dataProductDetail.listPaxInfant = Object.assign(secondDataMapping, dataProductDetail.listPaxInfant)
                                    }
                                    
                                })
                            }
                        })  
                    };

                    /* listPackage */
                    if(response.data.response.packet.length != null){
                        response.data.response.packet.map((data) => {
                            if(data.pricing_type === PACKAGE){
                                data.amount.map((secondDataMapping) => {
                                    dataProductDetail.listPackage.push(secondDataMapping);
                                })
                            } 
                        })
                    };


                    /* listAdditionalProducts */
                    if(response.data.response.additional_products.length != null){

                        response.data.response.additional_products.map((data) => {
                            dataProductDetail.listAdditionalProducts.push(data);
                        });
                    };

                     /* listAdditionalProductsDetails */
                    if(response.data.response.additional_products.length != null){
                        response.data.response.additional_products.map((detail) => {
                            
                            if(detail.details.length != null){
                                detail.details.map((secondDataMapping) => {
                                    dataProductDetail.listAdditionalProductsDetails.push(secondDataMapping)     
                                })
                            }
                            // dataProductDetail.listAdditionalProductsDetails = Object.assign(detail, dataProductDetail.listAdditionalProductsDetails )
                        })
                    };

                    
                    
                    /*
                        const object = { last_name: "john", age: 23, city: "London" };
                        object = Object.assign({ first_name: "Samuel" }, object);
                        
                    */

                      dispatch({type: action.payload.next.SUCCESS, payload: dataProductDetail})
                    // dispatch({type: action.payload.next.SUCCESS, payload: response.data.response})
                
                } else {
                    dispatch({type:action.payload.next.PENDING});
                }
                
            })
            .catch(function (error) {
                console.log(error);
                dispatch({type: action.payload.next.ERROR})
            })

            dispatch({type: action.payload.next.PENDING})
    }

    next(action);
}; 

export default bookingProductDetailMiddleware;
