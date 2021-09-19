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
    setArtistInfo(state,payload){
      state.artistInfo=payload
    },
   
    // setCartPrice(state, payload) {
    //   state.cartItems.price = payload
    // },
    // setFinalPrice(state, payload) {
    //   state.finalPrice = payload
    // },
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
  
    

   
   
  },




  modules: {},
});
