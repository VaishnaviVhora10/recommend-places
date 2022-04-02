import React from "react";
import styled from "styled-components";

export default function Gallery(props) {
  const  {galldata } = props;
  
  return (
    <Section id="recommend">
      <div className="destinations">
        {galldata.map((destination) => {
          return (
            <div className="destination" key={destination.id} >
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
                  <button className="btn">View</button>
                 </div>
            );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        height:300px;
        border-radius:5px;
      }
      
      .distance {
        display: flex;
        justify-content: space-between;
      }

    button{
          display: inline-block;
          padding: 10px 5px;
          font-size: 14px;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          outline: none;
          color: #fff;
          background-color: #4caf50;
          border: none;
          border-radius: 15px;
          box-shadow: 0 9px #99;
          margin-top:10px;
         }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }

  }
`;
