


const convertDate = (date) => {

  const year = date.slice(0, 4)

  const dayNum = () => {
   const res = parseInt(date.slice(8, 10))
    let j = res % 10
    let k = res % 100
    if(j == 1 && k != 11) {
    return res + "st";
    }
    if (j == 2 && k != 12) {
    return  res + "nd"
    }
    if (j == 3 && k!= 13) {
     return res + "rd"
    }
    return res + "th";
    }
    

    const month = () => {
      const res = parseInt(date.slice(5, 7))
      if (res === 01) {
        return "January"
      }
      if (res === 02) {
        return "February"
      }
      if (res === 03) {
        return "March"
      }      
      if (res === 04) {
        return "April"
      }      
      if (res === 05) {
        return "May"
      }     
      if (res === 06) {
        return "June"
      }
      
      if (res === 07) {
        return "July"
      }      
      if (res === 08) {
        return "August"
      }      
      if (res === 09) {
        return "September"
      }     
      if (res === 10) {
        return "October"
      }      
      if (res === 11) {
        return "November"
      }      
      if (res === 12) {
        return "December"
      }
            
    }
    return `${month()} ${dayNum()}, ${year}`
  };


console.log(convertDate("2017/12/02")); // => December 2nd, 2017
console.log(convertDate("2017/04/01")); // => April 1st, 2017
console.log(convertDate("2007/11/11")); // => November 11th, 2007
console.log(convertDate("2007/09/22")); // => September 22nd, 2007
console.log(convertDate("1987/08/24")); // => August 24th, 1987
console.log(convertDate("1987/07/31")); // => July 31st, 1987