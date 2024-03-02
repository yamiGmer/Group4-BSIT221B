import Header from "@/Component/header";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import React from 'react'

import fs from 'fs';
import path from 'path'



function Recipe ({category}){
    const router = useRouter();
    const foodCategory = router.query.category
    console.log(foodCategory)
    return(
        <>  
          <Head>
            <title>Recipe Page</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Header/>
            <h1>Testing<br/>Food Category: {foodCategory}</h1>  

            {
            category.map(i => {
              if (foodCategory == i.classification.category){
              return(
                //iterate div based on num
                <div key={i.num}>
                  
                  <p>{"ID: " + i.recipeId}</p>
                  <p>{"Food: " + i.foodName}</p>
                  <p>{"Category: " + i.classification.category}</p>
                  <br></br>
                </div>
              )
            }})
            }
            <Link href={{pathname: '../'}}>
               <h1>Back</h1>
            </Link>    
          <Footer/>
        </>
    );

}export default Recipe

export async function getStaticPaths(){
  const filePath = path.join(process.cwd(), "Component/recipe.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);

  const paths = data.map(recipe =>({
    params: {category: recipe.classification.category}
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
    
    const category = data.find(recipe => recipe.classification.category == params.category);
  
    return{
      props:{
        category: data
      }
    }
  
  }

