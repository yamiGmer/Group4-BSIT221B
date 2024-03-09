import Header from "@/Component/pagesHeader";
import Footer from "@/Component/footer";
import { useRouter } from "next/router";
import Head from 'next/head';
import Link from "next/link";
import React from 'react'

import fs from 'fs';
import path from 'path'
import styles from '@/styles/category.module.css'


function recipeCategory ({category}){
    const router = useRouter();
    const foodCategory = router.query.category
    console.log(foodCategory)
    return(
        <>
            
          <Head>
            <title>{foodCategory}</title>
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
                  <Link href={{pathname: '/recipePage/'+ i.foodName.toString()}}>
                    <p>{"Food: " + i.foodName}</p>
                    <img src={`/./././${i.image}`} className={styles.image}/>
                  </Link>  

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

}export default recipeCategory

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
    console.log("category: "+category)
    return{
      props:{
        category: data
      }
    }
  
  }

