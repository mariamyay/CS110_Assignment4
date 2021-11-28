module.exports = {
    matrixProduct: function(mat1,mat2){
        let result = [];
        for(let i=0; i<mat1.length; i++){
            if(mat1[i].length!=mat2.length){
                return "The matrices can't be multiplied.";
            }
            result[i] = [];
            for(let j=0; j<mat2[i].length;j++){
                let product = 0;
                for(let t=0; t<mat1[i].length; t++){
                    product += mat1[i][t]*mat2[t][j];
                }
                result[i].push(product);
            }
        }
        return result;
    },
    sumOfMatrices: function(mat1,mat2){
        let result = [];
        for(let i=0; i<mat1.length; i++){
            if(mat1.length!=mat2.length || mat1[i].length!=mat2[i].length){
                return "The matrices can't be added.";
            }
            result[i]=[];
            for(let j=0; j<mat1[i].length;j++){
                result[i].push(mat1[i][j]+mat2[i][j])
                }
        }
        return result;
    },
    sumOfArray: function(arr){
        let sum =0;
        for(let i=0; i<arr.length; i++){
            sum+=arr[i];
    
        }
        return sum;
    },
    sumOfEachRow: function(mat){
        let result = [];
        for(let i=0; i<mat.length;i++){
            result.push(this.sumOfArray(mat[i]));
        }
        return result;
    }
}