import { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import { View,ScrollView,Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {GET} from '../Api/TMDBApi';

 const Favorite = () =>{ 

    const [films, setFilms]= useState([]);

    useEffect(() => {
        retrieveData();
    });

    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('likedmoviesids');
          const restoredArray = JSON.parse(value);
          
          if (restoredArray == null) {
                //nothing 
                //console.log("Nothing")
              }
          else {
            
            var datas = new Array();
            for(var i=0; i < restoredArray.length; i++) {
                const moviedata = await GET(`/movie/${restoredArray[i]}`);
                datas.push(moviedata);
            }
            
            setFilms(datas);
           // console.log("films",films)
            }
        
        } catch (error) {
          // Error retrieving data
        }
      };
 
 return(<View>

 
        <FlatList
          data={films}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({item}) => <FilmItem film={item}  />}
          onEndReachedThreshold={0.5}
         
        />
        
 </View>);
 }

 export default Favorite;