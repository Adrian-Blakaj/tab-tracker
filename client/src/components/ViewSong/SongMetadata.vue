<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">Title: {{ song.title }}</div>
        <div class="song-artist">Artist: {{ song.artist }}</div>
        <div class="song-genre">Genre: {{ song.genre }}</div>

        <v-btn
          class="indigo"
          dark
          @click="
            navigateTo({ name: 'song-edit', params: { songId: song.id } })
          "
          >Edit</v-btn
        >

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          class="indigo"
          dark
          @click="setAsBookmark()"
          >Set as Bookmark</v-btn
        >

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          class="indigo"
          dark
          @click="unSetAsBookmark()"
          >Unset as Bookmark</v-btn
        >
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "../../services/BookmarksService";

export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (
          await BookmarksService.index({
            songId: this.song.id
          })
        ).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async setAsBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            SongId: this.song.id,
            UserId: this.$store.state.user.id
          })
        ).data;
      } catch (error) {
        console.log(error);
      }
    },
    async unSetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
