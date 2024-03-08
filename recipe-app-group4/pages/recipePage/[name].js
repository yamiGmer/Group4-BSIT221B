import Header from "@/Component/header";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import React from 'react'

import fs from 'fs';
import path from 'path'
import styles from '@/styles/recipe.module.css'


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
                                <img src={`/./././${i.image}`} className={styles.image}/>
                                <p>{"ID: " + i.recipeId}</p>
                                <p>{"Food: " + i.foodName}</p>
                                <p>{"Category: " + i.description}</p>
                                <br></br>
                            </div>
                        )
                    }
                })
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