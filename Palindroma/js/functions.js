function ispalindrome(word) {
    if (typeof word == "string" && word != "" && isNaN(parseInt(word))) {
        let wordLenght = word.length - 1;
        let wordLowered = word.toLowerCase();
        let wordReversed = "";

        while (wordLenght >= 0) {
            wordReversed += wordLowered[wordLenght];
            wordLenght--;
        } 
        
        if (wordLowered == wordReversed) {
            return true;
          } else {
            return false;
            }
    } 
}