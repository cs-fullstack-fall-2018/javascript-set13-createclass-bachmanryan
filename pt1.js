class Movie{
    constructor(movieName, rating, yearReleased) {
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;

    }
    printAllAttributes(){
        console.log("The name of the movie is: " + this.movieName + " " + "The rating is: " + this.rating + " " + "The year released is:" + this.yearReleased);
    }

}

function main(){
    var movie1 = new Movie("Red", 5, 2005);
    var movie2 = new Movie("Red 2", 4, 2007);
    console.log(movie1.printAllAttributes());
    console.log(movie2.printAllAttributes());


}

main();