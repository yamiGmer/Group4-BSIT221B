import styles from '@/styles/header.module.css'
import Link from "next/link";
import { Header, Segment } from 'semantic-ui-react'
import { ListItem, ListContent, List} from 'semantic-ui-react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'



function PagesHeader(){
    return(
        <Header className={styles.header} textAlign='center'>
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Header size='huge'>Taste of Japan</Header>
                    </GridColumn>
                </GridRow>
            </Grid>               
            <Grid>
                <GridRow>
                    <GridColumn>
                        <CategoryList/>
                    </GridColumn>
                </GridRow>
            </Grid> 

                
        </Header>
    )
}
export default PagesHeader

function CategoryList(){
    return(
        <List horizontal celled relaxed size='massive' className={styles.lists}>
                    <ListItem>
                        <ListContent >
                            <Link href={{pathname: '/'}}>Home</Link>
                        </ListContent>
                        
                    </ListItem>
                    <ListItem >
                        <Link href={{pathname: '/recipeCategory/Main'}}>Main</Link>
                    </ListItem>
                    <ListItem >
                        <Link href={{pathname: '/recipeCategory/Sides'}}>Sides</Link>
                    </ListItem>
                    <ListItem >
                        <Link href={{pathname: '/recipeCategory/Noodles'}}>Noodles</Link>
                    </ListItem>
                </List>
    )
}