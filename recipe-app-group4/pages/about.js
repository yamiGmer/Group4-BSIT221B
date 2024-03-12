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
                            padding: 20px;
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        section {
                            margin-bottom: 50px;
                        }
                        h1 {
                            font-size: 6vh;
                            margin-bottom: 40px;
                            color: black;
                            text-align: center;
                        }
                        p {
                            font-size: 2vh;
                            line-height: 2;
                            text-align: justify;
                            
                        }

                    `}
                </style>
            </Head>

            <PagesHeader/>

            <main>
                <section>
                    <h1>About Japanese Cuisine</h1>
                    <p> 
                        Japanese cuisine has a rich history that spans thousands of years, blending indigenous traditions with influences from China, Europe, and beyond. From its humble beginnings in prehistoric hunting and gathering to the sophisticated courtly cuisine of the Nara and Heian periods, Japanese food has evolved alongside the country's cultural and social changes. The medieval era introduced Zen Buddhism, emphasizing simplicity and mindfulness in cooking, while the Edo period saw the rise of sushi, tempura, and other iconic dishes. Modernization and globalization have further shaped Japanese cuisine, with a focus on seasonality, sustainability, and culinary innovation. Today, Japanese food is celebrated worldwide for its exquisite flavors, artful presentation, and deep cultural significance.
                    </p>
                </section>
            </main>

            <Footer/>
        </>
    );
}
