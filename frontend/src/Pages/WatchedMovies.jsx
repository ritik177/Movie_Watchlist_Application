
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMoviesData } from '../Redux/action';
import { Box, Button, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import MovieCard from "../Components/MovieCard";
import {Vortex} from 'react-loader-spinner';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const WatchedMovies = () => {
  const { status, error, movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [watched, setWatched] = useState([]);

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  useEffect(() => {
    dispatch(getMoviesData()).then(() => {
      setWatched(movies.filter((e) => e.watchStatus));
    });
  }, [dispatch, movies]);

  return (
    <Box pt="4rem"> {/* Add top padding */}
      <Navbar />
      <Box>
        <Box w={"90%"} margin={"auto"} mt={"1rem"}>
          <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={2}>
            {Array.isArray(watched) &&
              watched.map((movie) => <MovieCard key={movie._id} movie={movie} watched={true} />)}
          </Grid>
        </Box>
        {!watched.length && (
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} m={'auto'} h={'100vh'}>
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default WatchedMovies;
