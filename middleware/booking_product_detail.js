import axios from 'axios';
import { PRODUCT_DETAIL_SELECTED_REQUEST } from '../constants/action-types';

const bookingProductDetailMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === PRODUCT_DETAIL_SELECTED_REQUEST ){

        axios
            .get(action.payload.url)
            .then(function (response) {

                if(response.status == 200){

                    const pax = "pax"; 
                    const ADULT = "ADULT";
                    const CHILD = "CHILD";
                    const INFANT = "INFANT";
                    const PACKAGE = "package";

                    const dataProductDetail = { // Not used
                        listPaxAdult: {},
                        listPaxChild:{},
                        listPaxInfant:{},
                        nameOfProduct:{},
                        
                        listPackageId:[],
                        listCabin:[],
                        listEntrance:[],
                        listAdditionalDescription: [],
                        specialNote: ''
                    };

                    console.log("Original Response : ", response.data.response);


                    //****************************************************************************************** */
                    const dataProductDetailOkey = {
                       
                        nameOfProduct:{},
                        listAdditionalProducts:[],
                        listPaxAdult: {},
                        listPaxChild:{},
                        listPaxInfant:{},
                        listPackage: [],
                        listAdditionalDescription: [],
                        listAdditionalDescriptionWithListPax:[],
                        specialNote: '',
                        amountPerUnitAdditionalProductWithId:[],
                        amountPerUnitPackagePacketWithId:[]
                    };

                    /* nameOfProduct */
                    let getNameOfProduct = response.data.response.name != null ? response.data.response.name : 'What is your name ?'
                    dataProductDetailOkey.nameOfProduct = getNameOfProduct;

                    /* listPaxAdult - listPaxChild - listPaxInfant  */
                    if(response.data.response.packet.length != null){
                        response.data.response.packet.map((data) => { //   console.log("List of Packet", data)
                
                            if(data.pricing_type === pax){ // console.log("Pax Type",data.amount);
                
                                data.amount.map((secondDataMapping) => {

                                    if(secondDataMapping.pax_type === ADULT){ //console.log("Second Data Mapping ", secondDataMapping);
                                        dataProductDetailOkey.listPaxAdult = Object.assign(secondDataMapping, dataProductDetailOkey.listPaxAdult)
                                    };

                                    if(secondDataMapping.pax_type === CHILD){
                                        dataProductDetailOkey.listPaxChild = Object.assign(secondDataMapping, dataProductDetailOkey.listPaxChild)
                                    };

                                    if(secondDataMapping.pax_type === INFANT){
                                        dataProductDetailOkey.listPaxInfant = Object.assign(secondDataMapping, dataProductDetailOkey.listPaxInfant)
                                    };
                                })
                            }
                        });  
                    };

                    /* listPackage */
                    if(response.data.response.packet.length != null){
                        response.data.response.packet.map((data) => {
                            if(data.pricing_type === PACKAGE){
                                data.amount.map((secondDataMapping) => {
                                    dataProductDetailOkey.listPackage.push(secondDataMapping);

                                    //*List Packet/ Package - amountPerUnitPackagePacketWithId
                                    //[{"id": 328500, "qty": 0}]

                                    let usefullDummy = [{id: secondDataMapping.id, amount:secondDataMapping.amount, qty:0, maximum: secondDataMapping.maximum}];
                                    dataProductDetailOkey.amountPerUnitPackagePacketWithId.push(usefullDummy);
                                })
                            } 
                        })
                    };

                    
                    /* listAdditionalProducts  - amountPerUnitAdditionalProductWithId*/
                    if(response.data.response.additional_products.length != null){
                        response.data.response.additional_products.map((data) => {
                            dataProductDetailOkey.listAdditionalProducts.push(data);
                            // console.log("from Middleware, List Additional Product : ", data)

                            //*Details Data
                            if(data.details.length != null){
                                data.details.map((detailsData) => {

                                    //[{"id": 197, "qty": 0},{"id": 198, "qty": 0},{"id": 201, "qty": 0}],
                                    let dummy = [{id: detailsData.id, amount:detailsData.amount, qty:0, max_per_booking: detailsData.max_per_booking}];
                                    dataProductDetailOkey.amountPerUnitAdditionalProductWithId.push(dummy);
                                })
                            }
                        });
                    };

                    /* listAdditionalDescription  */
                    if(response.data.response.additional_description != null){
                        if(response.data.response.additional_description.description.length != null){

                            response.data.response.additional_description.description.map((data) => {
                                dataProductDetailOkey.listAdditionalDescription.push(data); 
                            });
                            
                        };
                    };

                    //*listAdditionalDescriptionWithListPax
                    if(response.data.response.additional_description != null){
                        if(response.data.response.additional_description.description.length != null){

                            response.data.response.additional_description.description.map((data) => {

                              
                                let usefullDummy = {description: data}; 
                                dataProductDetailOkey.listAdditionalDescriptionWithListPax.push(usefullDummy); 


                            })
                        };
                        if(response.data.response.additional_description.pax_details != null){
                            if(response.data.response.additional_description.pax_details.length != null){
                                response.data.response.additional_description.pax_details.map((dataPax) => {
    
                                    let usefullDummyPax = { pax: dataPax}
                                    dataProductDetailOkey.listAdditionalDescriptionWithListPax.push(usefullDummyPax);
                                })
                            };
                        }
                    };

                    /* specialNote  */
                    if(response.data.response.spesial_note != null){
                        dataProductDetailOkey.specialNote = response.data.response.spesial_note;
                    };

                    /*  */
                    
                    // dispatch({type: action.payload.next.SUCCESS, payload: dataProductDetail});
                    // dispatch({type: action.payload.next.SUCCESS, payload: response.data.response})
                    dispatch({type: action.payload.next.SUCCESS, payload: dataProductDetailOkey})
                    
                
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


/*
    const object = { last_name: "john", age: 23, city: "London" };
    object = Object.assign({ first_name: "Samuel" }, object);
    
*/


  // additional_description:{
//   "description":[{"heading":"A","content" :["Laundry Service↵✓  Shaded diving deck↵✓  Camera Station↵✓  Daily housekeeping↵✓  Audio & video entertainment↵✓  Library↵✓  Air Conditioned saloon↵✓  Aircon Cabins↵✓  Sun Deck↵✓  Indoor Saloon↵✓  Non-Diver (Snorkeler) Friendly↵✓  Warm Water Showers↵✓  Separate rinse for u/w camera↵✓  Custom built for diving↵✓  Charging stations↵✓  En-Suite bathrooms"]},{"heading":"C","content" :["123","llll"]}],
//   "pax_details":[{"heading":"B","content" :[null]}] //==> Data from list Additional Description [type Array]
// },
// let usefullDummy = {description: data, pax: dataPax}; 