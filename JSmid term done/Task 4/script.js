/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
  
    wasExpensive() {
      const threshold = 100000000;
      return this.budget > threshold;
    }
  }
  
  const someMovie = new Movie('Awesome Movie ', 'Some important guy', 101000000);
  const someOtherMovie = new Movie('Not such a good movie', 'Amateur', 250000);
  
  
  
