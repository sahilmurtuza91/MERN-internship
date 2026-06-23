const product = require("../data/products")

const removeProduct = (req, res)=>{
    const productId = Number(req.params.id);

    // findindex
    const index = product.findIndex((item)=>{
        return item._id === productId;
    })

    if(index === -1){
        return res.status(404).json({
            success:false,
            message:"Product not found",
        });
    }
        product.splice(index,1);

        res.status(200).json({
            success:true,
            message:"product removed"
        });

}

module.exports = {
    removeProduct
}