import Header from "@/Component/header";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";

import fs from 'fs';;
import path from 'path';
import styles from '@/styles/recipe.module.css';

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';




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
            <Header/>
            <h1>{recipeName}</h1>
            <main>
            {
            
                name.map(i =>{                 
                    if(recipeName == i.foodName){
                        return(
                            <div key={i.num}>
                                
                                
                            </div>
                        )
                    }
                })
            }
            {
            //like for i in users(x)
            name.map(i => {
                if(recipeName == i.foodName){
                    return(
                        <Grid divided='vertically' key={i.num}>
                        <GridRow columns={2}>
                            <GridColumn width={4}>
                                <img src={`/./././${i.image}`} className={styles.image}/>
                            </GridColumn>
                            <GridColumn width={10}>
                                <p>{"ID: " + i.recipeId}</p>
                                <p>{"Food: " + i.foodName}</p>
                                <p>{"Category: " + i.description}</p>
                                <br></br>
                            </GridColumn>
                        </GridRow>

                        <GridRow columns={3}>
                            <GridColumn>
                            <img src={`/./././${i.image}`} className={styles.image}/>
                            </GridColumn>
                            <GridColumn>
                            <img src={`/./././${i.image}`} className={styles.image}/>
                            </GridColumn>
                            <GridColumn>
                            <img src={`/./././${i.image}`} className={styles.image}/>
                            </GridColumn>
                        </GridRow>
                        </Grid>
                    )
                }
            }
            )
            }
            

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