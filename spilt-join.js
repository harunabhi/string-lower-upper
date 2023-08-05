const lyrics = 'tmi bndhu kala pakhi. ami jeno ki bosonto kale tomai bolte pari ni';
const parts = lyrics.split(' ');
console.log(parts);
const sentences = lyrics.split('.');
console.log(sentences);
const chars = lyrics.split('');
console.log(chars);
const partial = lyrics.slice(0, 3)
console.log(partial);
const lines = [
    't', 'm', 'i', ' ', 'b', 'n', 'd', 'h', 'u',
    ' ', 'k', 'a', 'l', 'a', ' ', 'p', 'a', 'k',
    'h', 'i', '.', ' ', 'a', 'm', 'i', ' ', 'j',
    'e', 'n', 'o', ' ', 'k', 'i', ' ', 'b', 'o',
    's', 'o', 'n', 't', 'o', ' ', 'k', 'a', 'l',
    'e', ' ', 't', 'o', 'm', 'a', 'i', ' ', 'b',
    'o', 'l', 't', 'e', ' ', 'p', 'a', 'r', 'i',
    ' ', 'n', 'i'
  ];
  const newSong = lines.join('');
  console.log(newSong);