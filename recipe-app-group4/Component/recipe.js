import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react'

export default class RecipeComp extends Component {
  state = { activeIndex: 0 }

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
            title here
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
                put text here
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         title here
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
                Put text here
          </p>
        </AccordionContent>

      </Accordion>
    )
  }
}
