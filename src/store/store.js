import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  
  
  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                  STATE
  //_________________________________________________________________________________________________________________________________________________________________________________
  
  state: {
    allSearch:"rasta",
    allInfo:[],
    musicId:"1VDmAO0Pbzs",
    shareSong:"",
    shareArtist:"UCQftgCD31uFz9QhFYIQ-D6A",
    shareAlbum:"",

    AlbumName:"",
    ArtistName:"",
    PlaylistId:"",
    Year:"",
    Thumbnail:""
    
   
  },

  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                 MUTATIONS
  //_________________________________________________________________________________________________________________________________________________________________________________

  mutations: {

    setInfo(state,payload){
      state.allInfo=payload
    } ,
    setSearchPhrase(state,payload){
      state.allSearch=payload
    },
    setArtist(state,payload){
      state.shareArtist=payload
    },
    setAlbum(state,payload){
      state.shareAlbum=payload
    },
    
    setSong(state,payload){
      state.shareSong=payload
    },  
    
   


    setAlbumName(state,payload){
      state.AlbumName=payload
    },
    setArtistName(state,payload){
      state.ArtistName=payload
    },
    setPlaylistId(state,payload){
      state.PlaylistId=payload
    },
    setYear(state,payload){
      state.Year=payload
    },
    setThumbnail(state,payload){
      state.Thumbnail=payload
    },
  },

  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                ACTIONS
  //_________________________________________________________________________________________________________________________________________________________________________________
  actions: {

    async fetchEverything() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch )
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
        })
    }, async fetchAlbum() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch )
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
        })
    }, async fetchSong() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch )
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
        })
    },
  },

  // async fetchUser() {
  //   await axios.get("http://localhost:3000/auth/whoami/")
  //     .then(response => {
  //       this.commit("setUser", response.data)
  //       if (response != null)
  //         console.log(response.data)
  //     })
  // },


  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                 GETTERS
  //_________________________________________________________________________________________________________________________________________________________________________________
  getters:{
    getEverything(state) {
      console.log("kommer vi hit?" ,state.allInfo)
      return state.allInfo
    },
    getMusicId(state){
      return state.musicId;
    },

    getSong(state){
      return state.shareSong
    } ,
  
     getAlbum(state){
      return state.shareAlbum
    },



    getAlbumName(state){
      return state.AlbumName
    },
    getArtistName(state){
     return state.ArtistName
    },
    getPlaylistId(state){
      return state.PlaylistId
    },
    getYear(state){
      return state.Year
    },
    getThumbnail(state){
      return state.Thumbnail
    },
  
    

   
   
  },




  modules: {},
});
