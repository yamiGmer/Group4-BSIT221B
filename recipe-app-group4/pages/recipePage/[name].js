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




function recipeName({name}){
    const router = useRouter();
    const recipeName = router.query.name;
    console.log("var: " +recipeName);
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
                        <Grid divided='vertically' key={i.num} centered>
                        <GridRow columns={2} container centered >
                            <GridColumn width={4}>
                                <Header as='h3' textAlign='center'>
                                    {"Food: " + i.foodName}
                                </Header>
                                <img src={`/./././${i.image}`} className={styles.image}/>
                                
                            </GridColumn>
                            <GridColumn width={11}>
                                <p>{"ID: " + i.recipeId}</p>
                                <p>{"Food: " + i.foodName}</p>
                                <p>{"Category: " + i.description}</p>
                                <br></br>
                            </GridColumn>
                        </GridRow>
                        </Grid>
                    )
                }
            }
            )
            }
            <Footer/>
            

            </main>
        </>
    );
}export default recipeName;


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
    console.log("name: "+ name)
    return{
        props:{
            name: data
        }
    }
    
}