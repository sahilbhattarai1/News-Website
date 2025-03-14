import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='box' >
        <div className="card" style={{backgroundColor:'#5174a9'}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>{this.props.source}<span class="visually-hidden">unread messages</span></span>
          <img style={{height:'15rem', width:'100%'}} src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body text-light">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary"><b>By {author==="" || author === null ? "Unknown author" : author} on {new Date(date).toDateString()}</b></small></p>
              <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read News</a>
            </div>
        </div>
      </div>
    )
  }
}
