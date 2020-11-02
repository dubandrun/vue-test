export default {
  actions: {
    async fetchPicture({ commit }) {
      try {
        const res = await fetch(
          "https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA"
        );
        const picture = await res.json();
        const pictureData = picture.data;
        commit("updatePicture", pictureData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  state: {
    currentPicture: "",
    picturesStore: [
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
      {
        id: 1,
        url: "https://media3.giphy.com/media/vwfdE93rLcUnu/200_d.gif",
        title: "test",
        date: "01.02.2003",
      },
    ],
  },
  mutations: {
    updatePicture(state, pictureData) {
      const {
        id,
        fixed_height_downsampled_url,
        title,
        import_datetime,
      } = pictureData;
      state.picturesStore.unshift({
        id: id,
        url: fixed_height_downsampled_url,
        title: title,
        date: import_datetime,
      });
      state.currentPicture = fixed_height_downsampled_url;
    },
    deletePicture(state, index) {
      state.picturesStore.splice(index, 1);
    },
  },
  getters: {
    getMainPicture(state) {
      return state.currentPicture;
    },
    getPicturesStore(state) {
      return state.picturesStore;
    },
  },
};
