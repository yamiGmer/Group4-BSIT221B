import PagesHeader from "@/Component/pagesHeader";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";


import fs from 'fs';;
import path from 'path';
import styles from '@/styles/recipe.module.css';

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import { Header, Segment } from 'semantic-ui-react'

import RecipeComp from "@/Component/recipe";


function recipePage({name}){
    const router = useRouter();
    const recipeName = router.query.name;
    console.log("var: " +recipeName);
    //console.log(nameOfRecipe);
    return(
        <>  
            <Head>
                <title>{recipeName}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <PagesHeader/>
            <main>
            {
            name.map(i => {
                if(recipeName == i.foodName){
                    return(
                        <Grid divided='vertically' key={i.num} centered stackable>
                            <br/>
                        <GridRow columns={2} container >
                            <GridColumn width={5} centered textAlign='center'>
                                <Segment>
                                    <Header as='h1'>
                                        {i.foodName}
                                    </Header>
                                </Segment>
                                <Segment>
                                    <img src={`/./././${i.image}`} className={styles.image}/>
                                </Segment>
                            </GridColumn>
                            <GridColumn width={10}>
                                <Segment>
                                    <Header as='h2'>{i.classification.category + " Dish: " +i.classification.cuisine }</Header>
                                   
                                </Segment>
                                <Segment>
                                    <Header as='h4'>{"Preparation Time: " + i.prepTime}</Header>
                                    <Header as='h4'>{"Cooking Time: " + i.cookTime}</Header>
                                    <Header as='h4'>{"Total Time: " + i.totalTime}</Header>
                                    <Header as='h4'>{"Serving Size: " + i.servingSize}</Header>
                                    
                                    <RecipeComp
                                        ingredients={i.ingredients}
                                        procedures={i.procedures}
                                       
                                    />
                                </Segment>
                                <br></br>
                            </GridColumn>
                        </GridRow>
                        </Grid>
                    )
                }
            }
            )
            }
            
            

            </main>
            <Footer/>
        </>
    );
}export default recipePage;


export async function getStaticPaths(){
    const filePath = path.join(process.cwd(), "Component/recipe.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);
  
    const paths = data.map(recipe =>({
      params: {name: recipe.foodName}
    }))
  
    return{
      paths,
      fallback: false
    };
}
  
export async function getStaticProps({params}) {  
    const filePath = path.join(process.cwd(), "Component/recipe.json");
    const fileContent = fs.readFileSync(filePath, "utf8")
    const data = JSON.parse(fileContent);
    
    const name = data.find(recipe => recipe.foodName == params.name);
    return{
        props:{
            name: data
        }
    }
    
}
