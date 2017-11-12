function getMatchingResource(token, imageList) {
  return new Promise((resolve, reject)=>{
      const matched = imageList.filter((obj) => token === obj.public_id);

      if(matched) {
          resolve(matched[0]);
      }else{
          reject("could not find a matching image with provided public id")
      }
  });
}

module.exports = getMatchingResource;
