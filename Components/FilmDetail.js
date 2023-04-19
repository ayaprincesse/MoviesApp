import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,Dimensions,
  StyleSheet,
  Button
} from 'react-native';
import axios from 'axios';
import {GET} from '../Api/TMDBApi';
import Styles from '../Styles';
import {ActivityIndicator} from 'react-native';
import Heart from './Heart';

import WebView from 'react-native-webview';


const { height, width } = Dimensions.get("window");

const setWidth = (w) => (width / 100) * w;

const API_KEY = "d5f6a20bfd85c70f2947622c2d7d10f9";

const FilmDetail = props => {
 

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [trailer, setTrailer] = useState("");
  
  //getting details
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };
  
    getDetails();
  }, []);

  //getting trailer
  useEffect(() => {

  setLoading(true);
  axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${props.route.params.movieId}?api_key=${API_KEY}&language=fr`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${props.route.params.movieId}/videos?api_key=${API_KEY}&language=en-US`
      ),
    ])
    .then(
      axios.spread(( response1, response2) => {
        // getting trailer key
        const trailer1 = response2.data?.results?.find(
          (result) => result?.type === "Trailer"
        )?.key;
        setTrailer(trailer1);
        
      })
    )
    .catch((e) => console.log(e))
    .finally(() => {
      setLoading(false);
    });
  }, [props.route.params.movieId]);

  const getGenre = () => {
    
    return details?.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  
  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator size="large" textColor={'#fff'} />      ) : (
        <View>
          <WebView
          style={{ flex: 1, width: "100%", height: 250 }}
          source={{ uri: `https://www.youtube.com/embed/${trailer}` }}
          allowsFullscreenVideo={true}
          />
         

          <View style={Styles.heart}>
          <Text style={Styles.detailsMovieTitle}>{details?.original_title}</Text>
          <Heart movie={details} ></Heart>
          </View>

          
          <Text style={Styles.heading2}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details?.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View style={Styles.detailsContainer2}>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {details?.budget}</Text>
            </View>

            <View style={Styles.detailsContainer2}>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details?.runtime} min.</Text>
            </View>

            <View style={Styles.detailsContainer2}>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details?.release_date}</Text>
            </View>
          </View>

          <View style={Styles.detailsContainer2}>
          <Text style={Styles.heading}>GENRE</Text>
          <View style={{display: 'flex', flexDirection:'row'}}>
          {getGenre()}
          </View>

          </View>


          
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({

 
  playButton: {
    position: "absolute",
    top: 110,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  video:{
    alignSelf:'center',
    width:400,
    height:300,
  
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:-20,
    paddingBottom:60
    
  }
 
});

export default FilmDetail;

