import styles from '@/styles/header.module.css';
import Link from 'next/link';
import { Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';

function PagesHeader({ recipe }) {
    return (
        <Header className={styles.header} textAlign='center'>
            <Grid verticalAlign='bottom' key='grid-header'>
                <GridRow columns={1} key='grid-title-container' className={styles.grid_title_container}>
                    <GridColumn key='grid-title'>
                        <Header size='huge' className={styles.grid_title} color='blue'>
                            <Link href={{ pathname: '/' }} className={styles.link}>
                                Taste of Japan
                            </Link>
                        </Header>
                    </GridColumn>
                </GridRow>
                
                    <GridRow columns={4} divided key='grid_link_container' className={styles.grid_link_container}>
                        <GridColumn key='grid-main'>
                            <Link href={{ pathname: '/recipeCategory/Main' }}>Main</Link>
                        </GridColumn>
                        <GridColumn key='grid-sides'>
                            <Link href={{ pathname: '/recipeCategory/Sides' }}>Sides</Link>
                        </GridColumn>
                        <GridColumn key='grid-noodles'>
                            <Link href={{ pathname: '/recipeCategory/Noodles' }}>Noodles</Link>
                        </GridColumn>
                        <GridColumn key='grid-about'>
                            <Link href={{ pathname: '/about' }}>About</Link>
                        </GridColumn>
                    </GridRow>
                
            </Grid>
        </Header>
    );
}

export default PagesHeader;
