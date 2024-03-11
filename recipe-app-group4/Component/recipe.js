import recipePage from '@/pages/recipePage/[name]';
import recipeName from '@/pages/recipePage/[name]'
import React, { Component, useState } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react'
import { ListItem, List } from 'semantic-ui-react'




export default class RecipeComp extends Component {
    state = { activeIndex: 0 };
    
    
    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
      this.setState({ activeIndex: newIndex })
    }
    
    render() {
      const { activeIndex } = this.state
      const { ingredients, procedures } = this.props;
      console.log(typeof(ingredients))
      return (
        <Accordion fluid styled>
          <AccordionTitle
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
              Ingredients
          </AccordionTitle>
          <AccordionContent active={activeIndex === 0}>
            {
            ingredients.map(i =>{
                  return(
                    <List>
                      <ListItem>{i}</ListItem>
                    </List>    
                  )
              })
            }

          </AccordionContent>
  
          <AccordionTitle
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
              Procedures
          </AccordionTitle>
          <AccordionContent active={activeIndex === 1}>
          {
            procedures.map(i =>{
                  return(
                    <List>
                      <ListItem>{i}</ListItem>
                    </List>    
                  )
              })
            }
          </AccordionContent>

        </Accordion>
      )
    }
  }

  