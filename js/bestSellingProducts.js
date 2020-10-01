var bestSellingProducts ={
    "products": [
        {
            "id": 234,
            "name": "Same day Delivery",
            "price": 450,
            "specialPrice": 250,
            "urlImage":"imgs/7.jpg",
            "category":"Wedding Flower"
        },
        {
            "id": 237,
            "name": "Basket of Gladness",
            "price": 99,
            "specialPrice": 70,
            "urlImage":"imgs/10.jpg",
            "category":"Flower Bouquet"
        },
        {
            "id": 236,
            "name": "Triple Pleasures",
            "price": 290,
            "specialPrice": 110,
            "urlImage":"imgs/9.jpg",
            "category":"Wedding Flower"
        },
        {
            "id": "235",
            "name": "Tulip Flower Bouquet",
            "price": 110,
            "specialPrice": 50,
            "urlImage":"imgs/8.jpg",
            "category":"Bouquet"
        }
    ],
    "reseñas": [
        {
            "id": 234,
            "stars": 5
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 236,
            "stars": 4
        },
        {
            "id": 236,
            "stars": 2
        },
        {
            "id": 237,
            "stars": 5
        }
    ]
};

function existReview(id){
    var review = null;
    Object.keys(bestSellingProducts.reseñas).forEach(function(keys){
        if(bestSellingProducts.reseñas[keys].id == id){
            review = bestSellingProducts.reseñas[keys].stars;
        }
    });
    return review;
}
console.log(bestSellingProducts);
Object.keys(bestSellingProducts.products).forEach(function(keys){
    console.log(bestSellingProducts.products[keys]);
    var stars = existReview(bestSellingProducts.products[keys].id);
    var review = '0';
    if(stars != null){
        review = stars / 5 *100;
    }
    console.log(stars);
    console.log(review);
    var product =

            '<li class="hs__item">'+
                '<div class="hs__item__image__wrapper">'+
                    '<div style="position: absolute;top: 13px;z-index: 1;background: #222222;left: 14px;padding: 7px;border-radius: 100%;color: white;font-size: 12px;">'+
                        '<label>20%</label>'+
                    '</div>'+
                    '<img class="hs__item__image" src="'+bestSellingProducts.products[keys].urlImage+'" alt=""/>'+
                '</div>'+
                '<div class="hs__item__description">'+
                    '<div>'+
                        '<span class="hs__item__title" style="font-size: 13px;padding-left: 10px;">'+bestSellingProducts.products[keys].name+'</span>'+
                        '<span class="hs__item__subtitle">$'+bestSellingProducts.products[keys].specialPrice+'</span>'+
                    '</div>'+
                    '<div style="position: relative;top: -6px;">'+
                        '<span style="font-size: 9px;color: gray;padding-left: 10px;">'+bestSellingProducts.products[keys].category+'</span>'+
                        '<span style="float: right;font-size: 11px;text-decoration: line-through;color: gray;">$'+bestSellingProducts.products[keys].price+'</span>'+
                    '</div>'+
                    '<div style="position: relative;top: -10px;padding-left: 10px;">'+
                        '<div class="container-section-social-single" style="width: 100%;display: flex;align-content: center;">'+
                            '<div class="contenedorStars1M" style="/* width: 100%; */position: relative;">'+
                                '<i class="far fa-star" style="font-size: 9px;"></i>'+
                                '<i class="far fa-star" style="font-size: 9px;"></i>'+
                                '<i class="far fa-star" style="font-size: 9px;"></i>'+
                                '<i class="far fa-star" style="font-size: 9px;"></i>'+
                                '<i class="far fa-star" style="font-size: 9px;"></i>'+
                                '<div class="contenedorStarsM" style="width: '+review+'%;position: absolute;top: 0px;left: 0;white-space: nowrap;color: #222222;overflow: hidden;/* display: none; */">'+
                                    '<i class="fas fa-star" style="font-size: 9px;"></i>'+
                                    '<i class="fas fa-star" style="font-size: 9px;"></i>'+
                                    '<i class="fas fa-star" style="font-size: 9px;"></i>'+
                                    '<i class="fas fa-star" style="font-size: 9px;"></i>'+
                                    '<i class="fas fa-star" style="font-size: 9px;"></i>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</li>';
            $('.hs-brands').append(product);
});