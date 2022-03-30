import React from 'react';
import './style.css';
import Actor from '../Actor'


const Movie = ({title, poster,year, rating, director, genre, cast}) => {
    
    return(

        <div className="movie">
			<img className='image' src={`assets/${poster}`} alt="{title}" />
			<div className='description'>
				<h2>{title}</h2>
				<p><span>Režisér:</span> {director}</p>
				<p><span>Rok vydání:</span> {year}</p>
				<p><span>Žánr:</span> {genre}</p>
				<p className='rating'>{rating} / 10</p>
			</div>
			<div className='actor'>
				{cast.map(item =>
						<Actor
							key={item.name}
							name={item.name}
							as={item.as}
						/>
					
				)}
			</div>	
			
			
		</div>

    )};

    export default Movie;