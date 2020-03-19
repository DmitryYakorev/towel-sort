


module.exports = function towelSort (matrix) {
    if (!matrix ||matrix.length === 0) {
        return [];
      }
    
      return matrix.reduce(( acc , n , idx ) => {
        if ( idx % 2 === 0) {
          return acc.concat(n);
        } else {
          return acc.concat(n.reverse());
        }
      }, []);
    }
  

