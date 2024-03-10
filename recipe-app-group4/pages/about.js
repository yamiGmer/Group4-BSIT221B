import Header from "@/Component/header";
import Footer from "@/Component/footer";
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Japanese Cuisine</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header/>

            <main>
                <section>
                    <h1>About Japanese Cuisine</h1>
                    <p>
Curry Ramen: Ramen, originally from China, has been a staple in Japanese cuisine since the late 19th century. Japanese curry, which is a thick stew-like dish with meat, vegetables, and curry roux, became popular in Japan during the Meiji era (1868-1912) when curry powder was introduced by the British. Combining curry with ramen noodles is a modern twist on this traditional Japanese dish.

Sushi Rice: Sushi rice, known as "shari" or "sumeshi," is a fundamental component of sushi. It's made by mixing cooked rice with rice vinegar, sugar, and salt. The history of sushi dates back to ancient times when it was originally a method of preserving fish in fermented rice. Over the centuries, sushi evolved into various forms, with the introduction of raw fish during the Edo period (1603-1868) leading to the creation of what is now known as nigiri sushi.

Sashimi: Sashimi refers to thinly sliced raw fish or seafood, served without rice. This delicacy has roots in Japanese culinary history dating back to the Jomon period (14,000-300 BCE), where fish was consumed raw. Over time, techniques for slicing and serving sashimi have been refined, making it an integral part of Japanese cuisine and a symbol of freshness and purity.

Tempura: Tempura is a Japanese dish consisting of battered and deep-fried seafood or vegetables. It was introduced to Japan by Portuguese missionaries and traders during the 16th century. Originally, tempura was associated with the Portuguese dish "peixinhos da horta," which consisted of battered and fried green beans. Japanese chefs adapted the technique to use local ingredients such as shrimp, fish, and vegetables, creating the tempura we know today.

Miso Soup: Miso soup is a traditional Japanese soup made with dashi stock and miso paste, typically containing ingredients like tofu, seaweed, and green onions. Miso, a fermented soybean paste, has been a staple in Japanese cuisine for centuries, with its origins dating back to ancient China. It became popular in Japan during the Nara period (710-794) and has since been widely used in various dishes, including soups, marinades, and sauces.

Udon: Udon is a type of thick wheat noodle commonly used in Japanese cuisine. Its origins can be traced back to the Nara period, although it became more widespread during the Edo period. Udon noodles are typically served hot or cold in a broth-based soup or stir-fried with various ingredients like meat, vegetables, and tofu.

Omurice: Omurice is a Japanese-Western fusion dish consisting of fried rice wrapped in a thin omelette and often topped with ketchup. It emerged in Japan during the early 20th century as Western-style cooking gained popularity. The name "omurice" is a blend of "omelette" and "rice." Today, it is a popular comfort food enjoyed by people of all ages in Japan.</p>
                </section>
            </main>

            <Footer/>
        </>
    );
}
