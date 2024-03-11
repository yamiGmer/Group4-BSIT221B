import Head from 'next/head';
import PagesHeader from "@/Component/pagesHeader";
import Footer from "@/Component/footer";

export default function About() {
    return (
        <>
            <Head>
                <title>About Japanese Cuisine</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <PagesHeader/>

            <main>
                <section>
                    <h1>About Japanese Cuisine</h1>
                    <p> 
            Japanese cuisine has a rich history that spans thousands of years, blending indigenous traditions with influences from China, Europe, and beyond.
        From its humble beginnings in prehistoric hunting and gathering to the sophisticated courtly cuisine of the Nara and Heian periods, Japanese food has evolved alongside the country's cultural and social changes. 
        The medieval era introduced Zen Buddhism, emphasizing simplicity and mindfulness in cooking, while the Edo period saw the rise of sushi, tempura, and other iconic dishes.
        Modernization and globalization have further shaped Japanese cuisine, with a focus on seasonality, sustainability, and culinary innovation. 
        Today, Japanese food is celebrated worldwide for its exquisite flavors, artful presentation, and deep cultural significance.
                   </p>
                </section>
            </main>

            <Footer/>
        </>
    );
}
