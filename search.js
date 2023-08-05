const lyrics = 'tmi bndhu kala pakhi ami jeno ki bosonto kale tomai bolte pari ni';
const searchString = 'Bndhu';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);
console.log(lyrics.indexOf("ami"));

// startwith "tmi"lekhat diye suro hoise ki na check korar jonno
console.log(lyrics.startsWith("tmi"));
// endwith "ni"lekhat seshe  hoise ki na check korar jonno
console.log(lyrics.endsWith('ni'));
