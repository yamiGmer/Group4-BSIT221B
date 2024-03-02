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
              
              <Link href={{pathname: '/recipeCategory/Main'}}>
                <h1>Main</h1>
              </Link>
              <Link href={{pathname: '/recipeCategory/Noodles'}}>
                <h1>Noodles</h1>
              </Link>
              <Link href={{pathname: '/recipeCategory/Sides'}}>
                <h1>Sides</h1>
              </Link>
                  
              <br/>
              <h1>Test map</h1>
                  {
            //like for i in users(x)
            recipe.map(i => {
              return(
                //iterate div based on num
                <div key={i.num}>
                  <p>{"name:" + i.recipeId}</p>
                  <p>{"Address" + i.foodName}</p>
                  
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
