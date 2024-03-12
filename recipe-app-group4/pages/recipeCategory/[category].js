import PagesHeader from "@/Component/pagesHeader";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import styles from '@/styles/category.module.css';
import { Grid, GridRow, GridColumn, Segment, Image, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';





function RecipeCategory({ category }) {
    const router = useRouter();
    const foodCategory = router.query.category;

    return (
        <>
            <Head>
                <title>{foodCategory}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PagesHeader />
            <main>
           
          
            <Grid relaxed stackable>
                <GridRow centered key='category-header' className={styles.category_header}>
                    <Header as='h1'>{foodCategory}</Header>
                </GridRow>
                <GridRow divided centered>
                    {category.map(item => {
                        if (foodCategory === item.classification.category) {
                            console.log(item.num)
                            return (  
                                <GridColumn key={item.num} width={3} textAlign="center" verticalAlign='middle'>
                                    <Link 
                                            href={{ pathname: '/recipePage/' + item.foodName.toString() }}
                                        >
                                    <Segment key='image-link-container'>             
                                            <Image src={`/./././${item.image}`} alt={item.foodName} size='medium' fluid centered/>                                                        
                                        
                                    </Segment>
                                    <Segment key='name-container'>
                                        <p>{item.foodName}</p>  
                                        
                                    </Segment>
                                    </Link>
                                </GridColumn> 
                            )
                        }
                    })}
                </GridRow>
            </Grid>

            </main>
            <Footer />
        </>
    );
}export default RecipeCategory;

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
