const express = require('express');
const authorRouter = express.Router(); 

function router(nav){

    var authors = [
        {
            name: 'Joseph Barbera',
            nationality: 'American',
            img: "jBarbera1.jpg",
            details:'He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1927 and subsequently Terrytoons in 1929. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, after MGM dissolved their animation department, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, producing programs such as The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound, and The Jetsons. In 1967, Hanna-Barbera was sold to Taft Broadcasting for $12 million, but Hanna and Barbera remained heads of the company. In 1991, the studio was sold to Turner Broadcasting System,[2] which in turn was merged with Time Warner, owners of Warner Bros., in 1996; Hanna and Barbera stayed on as advisors.'
        },
        {
            name: 'J. K. Rowling',
            nationality: 'British',
            img: "J._K._Rowling.jpg",
            details: `Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.

            Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.[7] The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosopher's Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.[8] In 2020, her "political fairytale" for children, The Ickabog, was released in instalments in an online version.[9]`
        },
        {
            name: 'Vaikom Muhammad Basheer',
            nationality: 'Indian',
            img: "basheer.jpg",
            details:`Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story.`
        }
    ]

    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    authorRouter.get('/:id',function(req,res){
        const id= req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[id]
        }); 
     });

    return authorRouter;

}
module.exports = router;

