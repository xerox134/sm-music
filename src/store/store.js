import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({


  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                  STATE
  //_________________________________________________________________________________________________________________________________________________________________________________

  state: {
    allSearch: "rasta",
    allInfo: [],
    musicId: "1VDmAO0Pbzs",
    shareArtist: "UCQftgCD31uFz9QhFYIQ-D6A",
    names: ["Drake", "Kanye West", "Iron Maiden", "Olivia Rodrigo", "BTS", "The Weeknd", "Doja Cat" , "Imagine Dragons" , "Luke Combs", "Billie Eilish", "Dua Lipa", "Ed Sheeran", "Halsey", "Justin Bieber", "Lil Baby"
    , "Taylor Swift", "Walker Hayes", "Lil Nas X", "The Kid LAROI", "Morgan Wallen", "J. Cole", "Chris Stapleton", "Luke Bryan", "Ariana Grande", "Travis Scott", "Post Malone", "Bruno Mars", "Lady Gaga"
    , "Harry Styles", "Queen", "Pop Smoke", "AC/DC", "Kane Brown", "Thomas Rhett", "Fleetwood Mac", "Maroon 5", "Jason Aldean", "Dan + Shay", "Future", "The Beatles", "Giveon", "Kendrick Lamar", "Juice WRLD"
    , "Jack Harlow", "Metallica", "TOMORROW X TOGETHER", "Bad Bunny", "Roddy Ricch", "Carrie Underwood", "Moneybagg Yo", "Megan Thee Stallion", "ABBA", "Maneskin", "Glass Animals", "Lee Brice", "Lil Durk"
    , "Cardi B", "Eagles", "Gabby Barrett", "Led Zeppelin", "Florida Georgia Line", "Old Dominion", "Meek Mill", "blackbear", "Lizzo", " Michael Jackson", "SZA", "Young Thug", "Kid Cud", "Rod Wave"
    , "Prince", "Duncan Laurence", "Chris Brown", "Polo G", "Lainey Wilson", "Lewis Capaldi", "DaBaby", "Nirvana", "Farruko", "Eminem", "Wizkid", "Khalid", "Creedence Clearwater Revival", "H.E.R" 
    , "Jonas Brothers", "The Beach Boys", "Anderson .Paak", "Greta Van Fleet","Panic! At The Disco", "Blake Shelton", "Guns N' Roses", "Maren Morris", "Elton John", "Miranda Larmbert"
    , "Rauw Alejandro", "OneRepublic", "Tyler The Creator", "Marshmello"],

    playList:[],
    songInfo:{},
    songName:"",
    artistName:"",
    playListParamId:"",
    routeParamId:"",
    playListInfo:{},
    artistInfo:{},
    currentPlaying:"",
    index:0,
    arrayLength:0

  },

  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                 MUTATIONS
  //_________________________________________________________________________________________________________________________________________________________________________________

  mutations: {

    setInfo(state, payload) {
      state.allInfo = payload
    },
    setSearchPhrase(state, payload) {
      state.allSearch = payload
    },
  
    setPlayList(state,payload){
      
      state.arrayLength++

      state.playList.push(payload)
      console.log(state.arrayLength)
    },
    setPlayList2(state,payload){
      state.playList=(payload)
      console.log(state.arrayLength)
    },
  
    setSongInfo(state,payload){
      state.songInfo=payload
    },
    setSongName(state,payload){
      state.songName =payload
    },
    setArtistName(state,payload){
      state.artistName=payload
    },
    setRouteParamId(state,payload){
      state.routeParamId=payload
    },
    setPlaylistParamId(state,payload){
      state.playListParamId=payload
    },
    setArtistInfo(state,payload){
      state.artistInfo=payload
    },
    setPlayListInfo(state,payload){
      state.playListInfo=payload
    },
    setCurrentPlaying(state,payload){
      state.currentPlaying=payload
    },
    setMinusIndex(state,payload){
      state.index=state.index-payload
    }, setPlusIndex(state,payload){
      state.index=state.index+payload
    }

    
  },

  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                ACTIONS
  //_________________________________________________________________________________________________________________________________________________________________________________
  actions: {

    async fetchEverything() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch)
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
        })
    }, 


  async fetchsongInfo(){
    await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.songName +  this.state.artistName)
    .then(response=>{
      this.commit("setSongInfo", response.data.content[0])
      console.log(response.data)

    })
  },
  
  async fetchArtistInfo(){
    await axios.get("https://yt-music-api.herokuapp.com/api/yt/artist/" + this.state.routeParamId)
    .then(response=>{
      this.commit("setArtistInfo", response.data)
      console.log(response.data)

    })
  },
  
  
  async fetchPlayListInfo(){
    await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.playListParamId)
    .then(response=>{
      this.commit("setPlayListInfo", response)
      console.log(response)

    })
  },


  },




  //_________________________________________________________________________________________________________________________________________________________________________________
  //                                                                                 GETTERS
  //_________________________________________________________________________________________________________________________________________________________________________________
  getters: {
    getEverything(state) {
      console.log("kommer vi hit?", state.allInfo)
      return state.allInfo
    },
    getMusicId(state) {
      return state.musicId;
    },

     getRandomNames(state) {
      console.log("random names", state.names)
      return state.names
    }, 
    
    getplayList(state) {
      console.log("nuvarande spellista", state.playList)
      return state.playList
    },
    getSongInfo(state){
      return state.songInfo
    },
    
    getPlayListInfo(state){
      return state.playListInfo
    },
    getArtistInfo(state){
      return state.artistInfo
    },
    getCurrentPlaying(state){
      return state.currentPlaying
    },
    getIndex(state){
      return state.index
    },
    getArrayLength(state){
      return state.arrayLength
    }

   

    
    


  },




  modules: {},
});
