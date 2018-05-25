exports.getResults = function(){
  var audioLinks = ["https://s3.amazonaws.com/media.cloutclinic.fuego/response/assessment.mp3", "https://s3.amazonaws.com/media.cloutclinic.fuego/response/critically+low.mp3",
  "https://s3.amazonaws.com/media.cloutclinic.fuego/response/god+tier.mp3", "https://s3.amazonaws.com/media.cloutclinic.fuego/response/more+serious.mp3", "https://s3.amazonaws.com/media.cloutclinic.fuego/response/not+fuego.mp3",
  "https://s3.amazonaws.com/media.cloutclinic.fuego/response/one+like+one+prayer.mp3", "https://s3.amazonaws.com/media.cloutclinic.fuego/response/skyrocketing.mp3",
  "https://s3.amazonaws.com/media.cloutclinic.fuego/response/so+proud.mp3", "https://s3.amazonaws.com/media.cloutclinic.fuego/response/whos+mans.mp3",
  "https://s3.amazonaws.com/media.cloutclinic.fuego/response/your+vision.mp3"];

  var rnum = Math.floor((Math.random() * 10) +1);
  var clip = "\'<audio src=\"" + audioLinks[rnum-1] + "\" />\'";
  return clip;
}

/** Link List
1. Assessment
2. Critically Low
3. God Tier
4. More Serious
5. Not Fuego
6. One Like One Prayer
7. Skyrocketing
8. So Proud
9. Whos Mans
10. Your Vision
**/
