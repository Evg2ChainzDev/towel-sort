
// You should implement your task here.

module.exports = function towelSort (matrix) {
    console.log('\nSnake bypass:');
    if (typeof matrix == 'object') {

        let res = []
        if ((matrix.length==0)||(matrix[0].length==0)||(typeof (matrix[0]) =='undefined')||(typeof matrix =='undefined')) { return []} else 
        {for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2 === 0 
              ? j
              : (matrix[i].length - j - 1);
      
              res.push( matrix[i][columnIdx] );
          }
        }
        return res;
        }

    } else {return []}
}
