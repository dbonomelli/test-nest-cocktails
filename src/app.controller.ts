import { Controller, Get } from '@nestjs/common';
import { CocktailsService } from './services/cocktails.service';
import { Cocktail } from './model/cocktail';

@Controller()
export class AppController {
  constructor(private readonly cocktailService: CocktailsService) {}

  @Get("/cocktails")
  GetCocktails(): Promise<Cocktail[]> {
    return this.cocktailService.getCocktails();
  }
}
