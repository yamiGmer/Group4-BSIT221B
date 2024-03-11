import recipePage from '@/pages/recipePage/[name]';
import recipeName from '@/pages/recipePage/[name]'
import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react'


export default function RecipeComp2({nameOfRecipe}){
    var activeIndex =  3 ;
    console.log(nameOfRecipe);
    function handleClick(titleProps){
        console.log("props"+ titleProps)
        var index = titleProps;
        
        var newIndex =  index
        activeIndex = newIndex
    }



    return (
        <Accordion fluid styled>
            <AccordionTitle 
                active={activeIndex === 0}
                index={0}
                onClick={() =>handleClick(0)}

            >
                <Icon name='dropdown' /> Ingredients
            </AccordionTitle>
                <AccordionContent active={activeIndex === 0}>
                    <p>
                    Here 
                    </p>
                </AccordionContent>

            <AccordionTitle 
                active={activeIndex === 1}
                index={1}
                onClick={() => handleClick(1)}
                >
                <Icon name='dropdown' /> Procedure
            </AccordionTitle>
                <AccordionContent active={activeIndex === 1}>
                    <p>
                            Put text here
                    </p>
                </AccordionContent>
        </Accordion>      
    );
    
    
}



class RecipeComp extends Component {
    state = { activeIndex: 0 };
    
    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
        
      this.setState({ activeIndex: newIndex })
    }
    
    render() {
      const { activeIndex } = this.state
      
      return (
        <Accordion fluid styled>
          <AccordionTitle
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is a dog?
          </AccordionTitle>
          <AccordionContent active={activeIndex === 0}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </AccordionContent>
  
          <AccordionTitle
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What kinds of dogs are there?
          </AccordionTitle>
          <AccordionContent active={activeIndex === 1}>
            <p>
              
            </p>
          </AccordionContent>
  
          <AccordionTitle
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            How do you acquire a dog?
          </AccordionTitle>
          <AccordionContent active={activeIndex === 2}>
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </AccordionContent>
        </Accordion>
      )
    }
  }

  