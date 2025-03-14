import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults:0,
      myStyle: {
        margin: "2rem 0",
        color:'yellow'
      },
    };
    document.title = `${this.ChangeUpperCase(
      this.props.category
    )} - Exact News`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b94a3348e5c48cf8b98bc616a953122&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(ApiUrl);
    this.props.setProgress(30);
    let convertedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: convertedData.articles || [],
      totalResults: convertedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // HandleNext = async () => {
  //   let ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     this.props.category
  //   }&apiKey=7b94a3348e5c48cf8b98bc616a953122&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;

  //   this.setState({ loading: true });

  //   let data = await fetch(ApiUrl);
  //   let convertedData = await data.json();

  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: convertedData.articles || [],
  //     loading: false,
  //   });
  // };

  // HandlePrevious = async () => {
  //   let ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     this.props.category
  //   }&apiKey=7b94a3348e5c48cf8b98bc616a953122&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;

  //   this.setState({ loading: true });

  //   let data = await fetch(ApiUrl);
  //   let convertedData = await data.json();

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: convertedData.articles || [],
  //     loading: false,
  //   });
  // };

  ChangeUpperCase = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  fetchMoreData = async() => {
    this.setState({page : this.state.page + 1})
    let ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b94a3348e5c48cf8b98bc616a953122&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(ApiUrl);
    let convertedData = await data.json();
    this.setState({
      articles : this.state.articles.concat(convertedData.articles),
      totalResults : convertedData.totalResults,
      loading:false
    })
  };

  render() {
    let { pageSize, category, headline } = this.props;
    return (
      <div className="container my-3">
        <h2 className="text-center" style={this.state.myStyle}>
          Today's Top Headlines: {headline}
        </h2>
        {/* {this.state.loading?<Spinner/>:" "} */}
        <div className="container-fluid"></div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row d-flex justify-content-center  my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-5 m-3" key={element.url}>
                  <NewsItem
                    title={
                      element.title === null || element.title.length === 0
                        ? element.title
                        : element.title.slice(0, 35)
                    }
                    description={
                      element.description === null ||
                      element.description.length === 0
                        ? "View description by clicking in Read News button"
                        : element.description.slice(0, 75) + " Read More..."
                    }
                    imgUrl={
                      element.urlToImage === null || element.urlToImage === ""
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMwJksFPYLy_pevEbUsmVPWpg59S_fPn50Q&s"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.HandlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            type="button"
            onClick={this.HandleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
