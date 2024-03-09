import Header from "@/Component/pagesHeader";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import styles from '@/styles/category.module.css';
import { Grid } from 'semantic-ui-react';

function RecipeCategory ({ category }) {
    const router = useRouter();
    const foodCategory = router.query.category;
    console.log(foodCategory);

    return (
        <>
            <Head>
                <title>{foodCategory}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <h1>Testing<br/>Food Category: {foodCategory}</h1>  
            <Grid relaxed columns={3}>
                {category.map(item => {
                    if (foodCategory === item.classification.category) {
                        return (
                            <Grid.Column key={item.num}>
                                <Link href={{ pathname: '/recipePage/' + item.foodName.toString() }}>
                                    <>
                                        <p>{"Food: " + item.foodName}</p>
                                        <img src={`/${item.image}`} className={styles.image} alt={item.foodName} />
                                    </>
                                </Link>
                            </Grid.Column>
                        )
                    }
                })}
            </Grid>
            <Link href={{ pathname: '../' }}>
                <h1>Back</h1>
            </Link>
            <Footer />
        </>
    );
}

export default RecipeCategory;

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), "Component/recipe.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    const paths = data.map(recipe => ({
        params: { category: recipe.classification.category }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {  
    const filePath = path.join(process.cwd(), "Component/recipe.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
    
    const category = data.filter(recipe => recipe.classification.category === params.category);

    return {
        props: {
            category: category
        }
    };
}
