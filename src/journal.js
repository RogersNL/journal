function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return wordsArray = this.title.split(" ").length + this.body.split(" ").length;
}
Entry.prototype.vowelCount = function() {
  var vowels = "aeiou";
  var count = 0;
  var splitTitle = this.title.split("");
  var splitBody = this.body.split("");
  for(i = 0; i < splitTitle.length; i++){
    if(vowels.includes(splitTitle[i].toLowerCase())){
      count++;
    }
  }
  for(j = 0; j < splitBody.length; j++){
    if(vowels.includes(splitBody[i].toLowerCase())){
      count++;
    }
  }
  return count;
}
Entry.prototype.consonantCount = function() {
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var count = 0;
  var splitTitle = this.title.split("");
  var splitBody = this.body.split("");
  for(i = 0; i < splitTitle.length; i++){
    if(consonants.includes(splitTitle[i].toLowerCase())){
      count++;
    }
  }
  for(j = 0; j < splitBody.length; j++){
    if(consonants.includes(splitBody[i].toLowerCase())){
      count++;
    }
  }
  return count;
}
Entry.prototype.getTeaser = function() {
  if(this.body.split(".")[0].split(" ").length > 8){
    return this.body.split(".")[0] + ".";
  }
  else {
    return this.body.split(".")[0].split(" ").slice(0,7).join(" ") + "...";
  }
}
