function getMatchingResource(token, imageList) {
  return new Promise((resolve, reject)=>{
      let matched = imageList.filter((obj) => token === obj.public_id);
      resolve(matched);
  });
}

module.exports = getMatchingResource;
