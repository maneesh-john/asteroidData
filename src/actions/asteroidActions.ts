import { AxiosResponse } from "axios";

import { http } from "../utils/http";
import { SET_ASTEROID_DATA, SET_ERROR } from "./types";
import { notFound, responseFailed } from "./messages";
import { Action } from "../contexts/appReducer";

export const searchAsteroid = async (id: string):Promise<Action> => {
  try{
    if(!id){
      throw({});
    }
    const resp:AxiosResponse = await http.get(`/${id}`);
    return {
      type: SET_ASTEROID_DATA,
      payload: resp.data,
      success: true
    };
  }catch(err){
    if(err?.response?.status === 404){
      return {
        type: SET_ERROR,
        payload: notFound,
        success: false
      };
    }
    return {
      type: SET_ERROR,
      payload: responseFailed,
      success: false
    }
  }
}

export const getRandomAsteroid = async ():Promise<Action> => {
  try{
    const resp:AxiosResponse = await http.get("/browse");
    const randomIndex:number = Math.floor(Math.random() * resp.data.near_earth_objects.length);
    if(typeof randomIndex === "number"){
      return searchAsteroid(resp.data.near_earth_objects[randomIndex]?.id);
    }
    throw({});
  }catch(err){
    return {
      type: SET_ERROR,
      payload: err?.response?.data || responseFailed,
      success: false
    };
  }
}