import Head from 'next/head';
import PagesHeader from "@/Component/pagesHeader";
import Footer from "@/Component/footer";

export default function About() {
    return (
        <>
            <Head>
                <title>About Japanese Cuisine</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
                <style>
                {`
                        body {
                            font-family: 'Montserrat', sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f9f9f9;
                            color: #333;
                        }
                        main {
                            padding: 5vh;
                            max-width: 200vh;
                            margin: 0 auto;
                        }
                        section {
                            margin-bottom: 0.1vh;
                        }
                        h1 {
                            font-size: 3em;
                            margin-bottom: 3vh;
                            color: black;
                            text-align: left;
                        }
                        p {
                            font-size: 1.3em;
                            line-height: 1.1em;
                            text-align: justify;
                        }   

                        .image-container {
                            float: left;
                            margin-right: 4vh;
                        }
                        .image-container img {
                            max-width: 40vh;
                            height: 55vh;
                            border: 0.5vh solid red; 
                        }

                        @media only screen and (max-width: 768px) {
                            main {
                                padding: 3vh;
                            }
                            h1 {
                                font-size: 2.5em;
                            }
                            p {
                                font-size: 1.1em;
                            }
                            .image-container {
                                float: none;
                                
                                margin-bottom: 5vh;
                                text-align: center;
                            }
                            .image-container img {
                                max-width: 100%;
                                height: auto;
                            }
                        }
                    `}
                </style>
            </Head>

            <PagesHeader/>

            <main>
                <section>
                    <div class="image-container">
                        <img src="/japanese_cuisine.jpg" alt="Japanese Cuisine" />
                    </div>
                    <div>
                        <h1>About Japanese Cuisine</h1>
                        <p> 
                        From its humble beginnings in prehistoric hunting and gathering to the sophisticated courtly cuisine of the Nara and Heian periods, Japanese food has evolved alongside the country's cultural and social changes.

The medieval era introduced Zen Buddhism, emphasizing simplicity and mindfulness in cooking. This period saw the development of shojin ryori, the vegetarian cuisine of Buddhist monks, which continues to influence Japanese culinary traditions today.

The Edo period (1603-1868) witnessed the rise of sushi, tempura, and other iconic dishes. Sushi, originally a method of preserving fish, transformed into a delicacy enjoyed by all social classes. Tempura, introduced by Portuguese traders, became a popular street food.

Modernization and globalization further shaped Japanese cuisine, with a focus on seasonality, sustainability, and culinary innovation. Western ingredients and cooking techniques were integrated, resulting in dishes like tonkatsu (breaded pork cutlets) and curry rice.

Today, Japanese food is celebrated worldwide for its exquisite flavors, artful presentation, and deep cultural significance. Traditional cooking techniques like grilling (yakimono), steaming (mushimono), simmering (nimono), and frying (agemono) are still revered, alongside a growing interest in health-conscious and plant-based alternatives.

Regional variations abound, with distinct culinary traditions found across the country's islands. Each region offers its own specialties, from the seafood-rich cuisine of Hokkaido to the hearty dishes of the mountainous regions.

The cultural significance of food is deeply ingrained in Japanese society, evident in rituals like the tea ceremony (chanoyu) and the appreciation of seasonal ingredients through festivals like hanami (cherry blossom viewing) and osechi ryori (New Year's cuisine).

In recent years, Japanese cuisine has experienced a global surge in popularity, with sushi bars, ramen shops, and izakayas (casual pubs) found in cities around the world. This has led to a greater appreciation for Japanese ingredients, culinary techniques, and dining aesthetics on the international stage.
                        </p>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
}
