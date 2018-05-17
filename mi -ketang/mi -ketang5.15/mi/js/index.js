

    handleCard();
    function handleCard(){

	var oCartBox = document.querySelector('.cart-box');
	var oCart = document.querySelector('.cart-box .cart');
	var oCartA = oCart.getElementsByTagName('a')[0];
	var oCartLoader= document.querySelector('.cart-box .loader'); 
	var oCartContent= document.querySelector('.cart-box .cart-content'); 
	var oCartEmpty= document.querySelector('.cart-box .empty-cart'); 
	oCartBox.onmouseenter = function(){
		//1.改变购物车的背景色也字体颜色
		oCart.style.background = '#fff';
		oCartA.style.color = '#ff6700';
		//显示loader
		oCartLoader.style.display='block';
		 //oCartContent.style.height = '100px';
		//上下两句意思一样
		animation(oCartContent,{height:100},false,function(){
			//loader
			oCartLoader.style.display='none';
			//获取数据并显示
			oCartEmpty.style.display='block';

		})


	}

	oCartBox.onmouseleave = function(){
		//1.改变购物车的背景色也字体颜色
		oCart.style.background = '#424242';
		oCartA.style.color = '#b0b0b0';
		animation(oCartContent,{height:0});
		//隐藏购物车内容
		oCartEmpty.style.display='none';
	}

   }


    handleNev();
    function handleNev(){
    	var aNev= document.querySelectorAll('.head .nev a');

    	

    } 


