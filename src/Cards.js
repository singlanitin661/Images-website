import React, { Component } from "react";
import CardItem from "./CardItem";
import './GlobalVariable';
import PropTypes from 'prop-types';

export class Cards extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "farewell",
      },
      title: "ADIOS - FAREWELL 2022",
      description:
        "It’s time to say goodbye to the past and hello to a new journey lying ahead",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcSfaP069ModBtA_JIMtgZUMlQHhmf15MLIXEVZ_ACrC0b3tvpr0qHeinNyGPqfWnev825tvo9L2AK2DVSv2CwW9ikSlAr8LYXmKZZ_fdXSkeovYREZ9CtbY3u_rt4lx4EII6Ry4HYOJ9Ygtu4guy3SKpsbn6ZdR86SYZnDc2vRjt4_Nx6U14SNEKb/w640-h480/WhatsApp%20Image%202022-06-12%20at%205.55.17%20PM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "ADIOS, The farewell was organised for our lovely senior members, who left their wonderful memories behind and started a new journey, full of different adventures...",
    },
    {
      source: {
        id: null,
        name: "recruitment",
      },
      title: "EB - TRANSFER",
      description:
        "If you are brave enough to say goodbye, life will reward you with a new hello.",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUYhu7nB_EU2yIM95Ciz1l8qbV48bVFHTB_sH3vZYeXzABBRRxofHgJLtWbOD7d-CveE2W_qxbMvzOpt0WRyMFF6NF5JqAZdtxYzlb_w_yYhsd6Zjg-lxEfvPPIRGCDtlbnOh1yzGGJ2HLI4Clh7b8zaPmRvhK4FidjYGt7JariwgmiQkvnMPxG0z/w640-h440/WhatsApp%20Image%202022-06-12%20at%2011.41.37%20AM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "EB Transfer is the day when we say goodbye to our old EB and welcome our new Executive Body full of enthusiasm and enthralling ideas. This formal event took place on the 4th of May, 2022....",
    },
    {
      source: {
        id: null,
        name: "farewell",
      },
      title: "ADIOS - FAREWELL 2022",
      description:
        "It’s time to say goodbye to the past and hello to a new journey lying ahead",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcSfaP069ModBtA_JIMtgZUMlQHhmf15MLIXEVZ_ACrC0b3tvpr0qHeinNyGPqfWnev825tvo9L2AK2DVSv2CwW9ikSlAr8LYXmKZZ_fdXSkeovYREZ9CtbY3u_rt4lx4EII6Ry4HYOJ9Ygtu4guy3SKpsbn6ZdR86SYZnDc2vRjt4_Nx6U14SNEKb/w640-h480/WhatsApp%20Image%202022-06-12%20at%205.55.17%20PM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "ADIOS, The farewell was organised for our lovely senior members, who left their wonderful memories behind and started a new journey, full of different adventures...",
    },
    {
      source: {
        id: null,
        name: "recruitment",
      },
      title: "EB - TRANSFER",
      description:
        "If you are brave enough to say goodbye, life will reward you with a new hello.",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUYhu7nB_EU2yIM95Ciz1l8qbV48bVFHTB_sH3vZYeXzABBRRxofHgJLtWbOD7d-CveE2W_qxbMvzOpt0WRyMFF6NF5JqAZdtxYzlb_w_yYhsd6Zjg-lxEfvPPIRGCDtlbnOh1yzGGJ2HLI4Clh7b8zaPmRvhK4FidjYGt7JariwgmiQkvnMPxG0z/w640-h440/WhatsApp%20Image%202022-06-12%20at%2011.41.37%20AM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "EB Transfer is the day when we say goodbye to our old EB and welcome our new Executive Body full of enthusiasm and enthralling ideas. This formal event took place on the 4th of May, 2022....",
    },
    {
      source: {
        id: null,
        name: "farewell",
      },
      title: "ADIOS - FAREWELL 2022",
      description:
        "It’s time to say goodbye to the past and hello to a new journey lying ahead",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcSfaP069ModBtA_JIMtgZUMlQHhmf15MLIXEVZ_ACrC0b3tvpr0qHeinNyGPqfWnev825tvo9L2AK2DVSv2CwW9ikSlAr8LYXmKZZ_fdXSkeovYREZ9CtbY3u_rt4lx4EII6Ry4HYOJ9Ygtu4guy3SKpsbn6ZdR86SYZnDc2vRjt4_Nx6U14SNEKb/w640-h480/WhatsApp%20Image%202022-06-12%20at%205.55.17%20PM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "ADIOS, The farewell was organised for our lovely senior members, who left their wonderful memories behind and started a new journey, full of different adventures...",
    },
    {
      source: {
        id: null,
        name: "recruitment",
      },
      title: "EB - TRANSFER",
      description:
        "If you are brave enough to say goodbye, life will reward you with a new hello.",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUYhu7nB_EU2yIM95Ciz1l8qbV48bVFHTB_sH3vZYeXzABBRRxofHgJLtWbOD7d-CveE2W_qxbMvzOpt0WRyMFF6NF5JqAZdtxYzlb_w_yYhsd6Zjg-lxEfvPPIRGCDtlbnOh1yzGGJ2HLI4Clh7b8zaPmRvhK4FidjYGt7JariwgmiQkvnMPxG0z/w640-h440/WhatsApp%20Image%202022-06-12%20at%2011.41.37%20AM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "EB Transfer is the day when we say goodbye to our old EB and welcome our new Executive Body full of enthusiasm and enthralling ideas. This formal event took place on the 4th of May, 2022....",
    },
    {
      source: {
        id: null,
        name: "farewell",
      },
      title: "ADIOS - FAREWELL 2022",
      description:
        "It’s time to say goodbye to the past and hello to a new journey lying ahead",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcSfaP069ModBtA_JIMtgZUMlQHhmf15MLIXEVZ_ACrC0b3tvpr0qHeinNyGPqfWnev825tvo9L2AK2DVSv2CwW9ikSlAr8LYXmKZZ_fdXSkeovYREZ9CtbY3u_rt4lx4EII6Ry4HYOJ9Ygtu4guy3SKpsbn6ZdR86SYZnDc2vRjt4_Nx6U14SNEKb/w640-h480/WhatsApp%20Image%202022-06-12%20at%205.55.17%20PM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "ADIOS, The farewell was organised for our lovely senior members, who left their wonderful memories behind and started a new journey, full of different adventures...",
    },
    {
      source: {
        id: null,
        name: "recruitment",
      },
      title: "EB - TRANSFER",
      description:
        "If you are brave enough to say goodbye, life will reward you with a new hello.",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUYhu7nB_EU2yIM95Ciz1l8qbV48bVFHTB_sH3vZYeXzABBRRxofHgJLtWbOD7d-CveE2W_qxbMvzOpt0WRyMFF6NF5JqAZdtxYzlb_w_yYhsd6Zjg-lxEfvPPIRGCDtlbnOh1yzGGJ2HLI4Clh7b8zaPmRvhK4FidjYGt7JariwgmiQkvnMPxG0z/w640-h440/WhatsApp%20Image%202022-06-12%20at%2011.41.37%20AM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "EB Transfer is the day when we say goodbye to our old EB and welcome our new Executive Body full of enthusiasm and enthralling ideas. This formal event took place on the 4th of May, 2022....",
    },
    {
      source: {
        id: null,
        name: "recruitment",
      },
      title: "EB - TRANSFER",
      description:
        "If you are brave enough to say goodbye, life will reward you with a new hello.",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUYhu7nB_EU2yIM95Ciz1l8qbV48bVFHTB_sH3vZYeXzABBRRxofHgJLtWbOD7d-CveE2W_qxbMvzOpt0WRyMFF6NF5JqAZdtxYzlb_w_yYhsd6Zjg-lxEfvPPIRGCDtlbnOh1yzGGJ2HLI4Clh7b8zaPmRvhK4FidjYGt7JariwgmiQkvnMPxG0z/w640-h440/WhatsApp%20Image%202022-06-12%20at%2011.41.37%20AM.jpeg",
      publishedAt: "2022-06-13",
      content:
        "EB Transfer is the day when we say goodbye to our old EB and welcome our new Executive Body full of enthusiasm and enthralling ideas. This formal event took place on the 4th of May, 2022....",
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>Events</h1>
        <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.urlToImage}>
                        <CardItem title={element.title} description={element.description} imageUrl={element.urlToImage}  date={element.publishedAt}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
      </div>
    );
  }
}

export default Cards;
