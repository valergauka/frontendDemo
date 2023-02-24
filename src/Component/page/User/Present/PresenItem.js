import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../UIComponent/Button';


export class PresentItem extends Component {
  render() {
    return (
        <div>
          <div onClick={() => this.props.onAdd(this.props.button)}>
            <Link className='buttonLink'  to='/present/form'>
                <Button title={this.props.button.title}/>
            </Link>
            </div>  
        </div>
      
      
      )
  }
}

export default PresentItem