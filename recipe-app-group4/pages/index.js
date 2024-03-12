import PagesHeader from "@/Component/pagesHeader";
import Footer from "@/Component/footer";
import Link from "next/link";
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import styles from '@/styles/home.module.css'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { GridRow, GridColumn, Grid, Image, Header, Segment} from 'semantic-ui-react'
import { CardMeta, CardHeader, CardDescription, CardContent, Card } from 'semantic-ui-react'

export default function Home({recipe}) {
    return(
        <>

        <Head>
          <title>Recipe Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
        </Head>

        <PagesHeader/> 
          
          <main>
          <Grid stackable>
            <GridRow key='title-row' textAlign="center" columns={1}>
              <GridColumn key='title-column'>
                <Header as='h1'>Search Bar</Header>
              </GridColumn>
            </GridRow>   
            <GridRow columns={3} relaxed stackable textAlign="center">
              <GridColumn key='left-column' width={6} textAlign="left">
                <Segment>
                  <Header as='h2'>Recommended Pairings</Header>
                  {
                  recipe.map(i => {
                    if(i.recipeId == 4 || i.recipeId == 1){
                      return(
                        
                        <Card key={i.num} textAlign='left' className={styles.card}>
                        <Image src={`/./././${i.image}`} wrapped ui={false} fluid/>
                        <CardContent>
                          <CardHeader>{i.foodName}</CardHeader>
                          <CardMeta>
                            <span className='foodId'>Food No. {i.recipeId}</span>
                          </CardMeta>
                          <CardDescription>
                            {i.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                      
                      )
                    }})
                    }
                  
                </Segment>
              </GridColumn>
              <GridColumn key='left-column' width={6} textAlign="left">
                <Segment>
                  <Header as='h2'>Recommended by Web Creators</Header>
                  {
                  recipe.map(i => {
                    if(i.recipeId == 5 || i.recipeId == 7){
                      return(
                        
                        <Card key={i.num} textAlign='left' className={styles.card}>
                        <Image src={`/./././${i.image}`} wrapped ui={false} fluid/>
                        <CardContent>
                          <CardHeader>{i.foodName}</CardHeader>
                          <CardMeta>
                            <span className='foodId'>Food No. {i.recipeId}</span>
                          </CardMeta>
                          <CardDescription>
                            {i.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                      
                      )
                    }})
                    }
                  
                </Segment>
              </GridColumn>
              <GridColumn key='right-column' width={3} textAlign="left">
              <Segment>
                <Header as='h2'>Recently Added</Header>
                {

                  recipe.slice(0).reverse().map(i => {
                    return(

                      <div key={i.num}>  
                        <Link href={{pathname: '/recipePage/'+ i.foodName.toString()}}>
                          <p>{i.recipeId + ". " + i.foodName}</p>
                        </Link>  
                        <br></br>
                      </div>
                    )
                  })
                }
              </Segment>
              </GridColumn>  
            </GridRow>   
          </Grid>

    
                  
         
          
         
          

          </main>
      
        
        <Footer/>

      </>
  );
}




export async function getStaticProps() {  
    //LOCAL JSON FETCHING
  
      //cwd(current working directory)
    const filePath = path.join(process.cwd(), "Component/recipe.json");
    const fileContent = fs.readFileSync(filePath, "utf8")
      //converted to json object
    const data = JSON.parse(fileContent);
    
  
    console.log(data);
    return{
      props:{
        recipe: data
      }
    }
  
}
