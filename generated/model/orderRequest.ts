/**
 * OpenAPI Template
 * Template of split OpenAPI with validator
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrderRequestDemandInfo } from './orderRequestDemandInfo';
import { OrderRequestDeliverInfo } from './orderRequestDeliverInfo';


export interface OrderRequest { 
    /**
     * 商品ID
     */
    productId: number;
    /**
     * stripeのカードID
     */
    stripCardId: string;
    deliverInfo: OrderRequestDeliverInfo;
    demand_info: OrderRequestDemandInfo;
}

