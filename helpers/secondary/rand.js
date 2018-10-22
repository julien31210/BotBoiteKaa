
const on100 = (chances) => {
  return (Math.random() * 100 <= chances);
}


const onArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length - 1)];
}

module.exports = {
  on100,
  onArray
}