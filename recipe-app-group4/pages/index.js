import Header from "@/Component/header";
import Footer from "@/Component/footer";
import Link from "next/link";
import Head from 'next/head';
import fs from 'fs';
import path from 'path'

export default function Home({recipe}) {
    return(
        <>

        <Head>
          <title>Recipe Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
        </Head>

        <Header/> 
          
          <main>

          <section>

              <br/>
              <h1>Test map for recipe</h1>
              <h1>This is the Page for japanese cuisine trivia</h1>
                  {
            //like for i in users(x)
            recipe.map(i => {
              return(
                //iterate div based on num
                <div key={i.num}>
                  <p>{"Id: " + i.recipeId}</p>
                  <p>{"Name: " + i.foodName}</p>
                  <Link href={{pathname: '/recipePage/'+ i.foodName.toString()}}>
                        RECIPE {i.recipeId}
                    </Link>  
                  <br></br>
                </div>
              )
            })
          }

            
          
         
          </section>


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
