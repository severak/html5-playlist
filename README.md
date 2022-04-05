# html5-playlist.js

Just simple script that adds missing playlist functionality to HTML5 audio element.

See [live demo](https://severak.github.io/html5-playlist/) or [real world use](http://svita.cz/pro-veronyku/).

## How to use it?

Add your audio element with first song of playlist and `data-playlist-id` attribute:

```
<audio src="trololo.mp3" controls data-playlist-id="my_awesome_playlist"></audio>
```

Add playlist itself as list of links:

```
<ul id="my_awesome_playlist">
    <li><a href="trololo.mp3">trololo</a></li>
    <li><a href="sandstorm.mp3">Sandstorm by Darude</a></li>
</ul>
```

Note that currently playing song in playlist will have `current-track` class on link.

Include javascript file AFTER the playlist (at end of the page):

```
<script src="html5-playlist.js"></script>
```

???

Profit!


