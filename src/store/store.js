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
    shareSong: "",
    shareArtist: "UCQftgCD31uFz9QhFYIQ-D6A",
    shareAlbum: "",
    names: ["Drake", "Kanye West", "Iron Maiden", "Olivia Rodrigo", "BTS", "The Weeknd", "Doja Cat" , "Imagine Dragons" , "Luke Combs", "Billie Eilish", "Dua Lipa", "Ed Sheeran", "Halsey", "Justin Bieber", "Lil Baby"
    , "Taylor Swift", "Walker Hayes", "Lil Nas X", "The Kid LAROI", "Morgan Wallen", "J. Cole", "Chris Stapleton", "Luke Bryan", "Ariana Grande", "Travis Scott", "Post Malone", "Bruno Mars", "Lady Gaga"
    , "Harry Styles", "Queen", "Pop Smoke", "AC/DC", "Kane Brown", "Thomas Rhett", "Fleetwood Mac", "Maroon 5", "Jason Aldean", "Dan + Shay", "Future", "The Beatles", "Giveon", "Kendrick Lamar", "Juice WRLD"
    , "Jack Harlow", "Metallica", "TOMORROW X TOGETHER", "Bad Bunny", "Roddy Ricch", "Carrie Underwood", "Moneybagg Yo", "Megan Thee Stallion", "ABBA", "Maneskin", "Glass Animals", "Lee Brice", "Lil Durk"
    , "Cardi B", "Eagles", "Gabby Barrett", "Led Zeppelin", "Florida Georgia Line", "Old Dominion", "Meek Mill", "blackbear", "Lizzo", " Michael Jackson", "SZA", "Young Thug", "Kid Cud", "Rod Wave"
    , "Prince", "Duncan Laurence", "Chris Brown", "Polo G", "Lainey Wilson", "Lewis Capaldi", "DaBaby", "Nirvana", "Farruko", "Eminem", "Wizkid", "Khalid", "Creedence Clearwater Revival", "H.E.R" 
    , "Jonas Brothers", "The Beach Boys", "Anderson .Paak", "Greta Van Fleet","Panic! At The Disco", "Blake Shelton", "Guns N' Roses", "Maren Morris", "Elton John", "Miranda Larmbert"
    , "Rauw Alejandro", "OneRepublic", "Tyler The Creator", "Marshmello"],

    AlbumName: "",
    ArtistName: "",
    PlaylistId: "",
    Year: "",
    Thumbnail: "",
    playList:[]


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
    setArtist(state, payload) {
      state.shareArtist = payload
    },
    setAlbum(state, payload) {
      state.shareAlbum = payload
    },

    setSong(state, payload) {
      state.shareSong.push(payload)
    },




    // setAlbumName(state, payload) {
    //   state.AlbumName = payload
    //   console.log("vad fpr vi bram", state.AlbumName)
    // },
    // setArtistName(state, payload) {
    //   state.ArtistName = payload
    //   console.log("vad fpr vi bram", state.ArtistName)

    // },
    // setPlaylistId(state, payload) {
    //   state.PlaylistId = payload
    //   console.log("vad fpr vi bram", state.PlaylistId)

    // },
    // setYear(state, payload) {
    //   state.Year = payload
    //   console.log("vad fpr vi bram", state.Year)

    // },
    // setThumbnail(state, payload) {
    //   state.Thumbnail = payload
    //   console.log("vad fpr vi bram", state.Thumbnail)

    // },

    setPlayList(state,payload){
      state.playList.push(payload)
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
    }, async fetchAlbum() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch)
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
        })
    }, async fetchSong() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.allSearch)
        .then(response => {
          this.commit("setInfo", response.data.content)
          console.log(response.data)
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

    getSong(state) {
      console.log("vad får jag ut2", state.shareSong)

      return state.shareSong
    },

    getAlbum(state) {
      return state.shareAlbum
    },



    getAlbumName(state) {

      return state.AlbumName
    },
    getArtistName(state) {
      console.log("vad får jag ut2", state.ArtistName)

      return state.ArtistName
    },
    getPlaylistId(state) {
      console.log("vad får jag ut2", state.PlaylistId)

      return state.PlaylistId
    },
    getYear(state) {
      console.log("vad får jag ut2", state.Year)

      return state.Year
    },
    getThumbnail(state) {
      console.log("vad får jag ut2", state.Thumbnail)

      return state.Thumbnail
    },
     getRandomNames(state) {
      console.log("vad får jag ut2", state.names)

      return state.names
    }, 
    
    getplayList(state) {
      console.log("vad får jag ut2", state.playList)

      return state.playList
    },





  },




  modules: {},
});
