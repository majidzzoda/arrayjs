// function reverse(text, letter) {
//     let words = text.split(" ")
//     let cnt = ""
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].at(0) == letter) {
//             cnt += sterva(words[i]) + " "
//         }
//         else {
//             cnt += words[i] + " "
//         }
//     }
//     return cnt
// }
// console.log(reverse("word searches are super fun", "s"));
// function sterva(str) {
//     let vr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         vr += str[i]
//     }
//     return vr;
// }

function burger(str) {
    let cnt = 0
    for (let i = 0; i < str.length; i++) {
        cnt++
    }
    if (cnt > 3) {
        return false
    }
    for (let i = 0; i < str.length; i++) {
        if (str.at(0) != 'a' && str.at(2) != 'a' || str.at(0) != 'e' && str.at(2) != 'e' || str.at(0)!= 'y' && str.at(2) != 'y' || str.at(0)!= 'u' && str.at(2) != 'u' || str.at(0) != 'i' && str.at(2) != 'i' || str.at(0)!= 'o' && str.at(2) != 'o'
    && str.at(1) == 'a' || str.at(0) != 'a' && str.at(2) != 'a' || str.at(0) != 'e' && str.at(2) != 'e' || str.at(0)!= 'y' && str.at(2) != 'y' || str.at(0)!= 'u' && str.at(2) != 'u' || str.at(0) != 'i' && str.at(2) != 'i' || str.at(0)!= 'o' && str.at(2) != 'o' && str.at(1) == 'e' || 
    str.at(0) != 'a' && str.at(2) != 'a' || str.at(0) != 'e' && str.at(2) != 'e' || str.at(0)!= 'y' && str.at(2) != 'y' || str.at(0)!= 'u' && str.at(2) != 'u' || str.at(0) != 'i' && str.at(2) != 'i' || str.at(0)!= 'o' && str.at(2) != 'o' && str.at(1) == 'i' || str.at(1) == 'o' || str.at(1) == 'u' || str.at(1) == 'y' ) {
            return true
        }
        else {
            return false
        }
    }
}
console.log(burger("ear"));
