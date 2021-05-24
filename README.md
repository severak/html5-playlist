# html5-playlist

adds missing playlist to HTML5 audio element.

## How?

Add your audio element with first song of playlist and `data-playlist-id` attribute:

```
<audio src="trololo.mp3" controls data-playlist-id="my_awesome_playlist"></audio>
```

Add playlist iself as `li` of `a` tags:

```
<ul id="my_awesome_playlist">
    <li><a href="trololo.mp3">trololo</a></li>
    <li><a href="sandstorm.mp3">Sandstorm by Darude</a></li>
</ul>
```

Include javascript file AFTER playlist:

```
<script src="html5-playlist.js"></script>
```

???

Profit!


