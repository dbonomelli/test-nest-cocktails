import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Cocktail } from 'src/model/cocktail';

@Injectable()
export class CocktailsService {

    constructor(private readonly configService:ConfigService){}

    async getCocktails(): Promise<Cocktail[]>{
        //declarar url
        let url:string = this.configService.getOrThrow<string>("ENDPOINT_URL")
        console.log(url);
        //poner async
        //peticion de la api
        let res = await axios.get(url);
        let data =  res.data;
        let cocktails = data.drinks;

        console.log(res);
        //convert response to my response
        return cocktails.map((c)=> {  
            let a = c.strAlcoholic == 'Alcoholic' ? true: false;
            return {nombre: c.strDrink, esAlcohol: a, tipoVaso: c.strGlass}
        })
    }
}
