import styles from '@/styles/header.module.css'
import Link from "next/link";
import { Header } from 'semantic-ui-react'
import { ListItem, ListContent, List} from 'semantic-ui-react'
import { GridRow, GridColumn, Grid, Segment } from 'semantic-ui-react'



function PagesHeader(){
    return(
        <Header className={styles.header} textAlign='center'>
            <Grid verticalAlign={'bottom'}>
                <GridRow/><GridRow/>
                <GridRow columns={1}>
                    <GridColumn>
                            <Header size='huge' className=''>Taste of Japan</Header>
                    </GridColumn>
                </GridRow>    

                        
                <GridRow columns={4}  divided >
                        <GridColumn>
                            <Link href={{pathname: '/'}}>Home</Link>
                        </GridColumn>
                        <GridColumn>
                            <Link href={{pathname: '/recipeCategory/Main'}}>Main</Link>
                        </GridColumn>
                  
                        <GridColumn>
                            <Link href={{pathname: '/recipeCategory/Sides'}}>Sides</Link>
                        </GridColumn>
                        <GridColumn>
                            <Link href={{pathname: '/recipeCategory/Noodles'}}>Noodles</Link>
                        </GridColumn>
                   
                </GridRow>
            </Grid> 

                
        </Header>
    )
}
export default PagesHeader