import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../Redux/action";
import { Box, Button, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import MovieCard from "../Components/MovieCard";
import { FaHistory } from "react-icons/fa";
import { Vortex } from "react-loader-spinner";
import AddMovieModal from "../Components/AddMovieModal";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  const { status, error, movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [deletionCount, setDeletionCount] = useState(0);

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch, deletionCount]);

  const handleMovieUpdate = () => {
    setDeletionCount((prev) => prev + 1);
  };

  const watchedMovies = () => {
    nav("/watched")
  }

  return (
    <Box pt="4rem"> {/* Add top padding */}
      <Navbar />
      <Box>
      {
        status === "success" ?
        <Box w={"90%"} margin={"auto"} mt={"1rem"}>
            <Box w={"95%"} margin={"auto"} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} mb={4}>
                <AddMovieModal onAdd={handleMovieUpdate}/>
                <Box m={2} p={2} textAlign={'right'} onClick={watchedMovies}>
                    <Button bg={"#ED1C24"} color={"white"} p={4} _hover={{ bg: "white", color: "black", border:'1px solid black' }}> Watched Movies 
                    <Text as="span" fontSize={'1rem'} ml={2}><FaHistory /></Text></Button>
                </Box>
            </Box>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={2}>
            {Array.isArray(movies) &&
                movies.map((movie) => <MovieCard key={movie._id} movie={movie} onDelete={handleMovieUpdate}/>)}
            </Grid>
      </Box> : <>
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
        </>
      }
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;


