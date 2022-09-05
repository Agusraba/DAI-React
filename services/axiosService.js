import { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, BASE_URL_LOGIN} from "../config";

const clienteAxios = axios.create({
  baseURL: BASE_URL_LOGIN,


})

export const Verificar = async (userState) => {  
  return clienteAxios
      .post(``,{
        ...userState
      })
      .then((res) => {
        return res.data.token
      })
      .catch((e) => {
        throw "Error 401"
        console.log(...userState)
      });
  };

