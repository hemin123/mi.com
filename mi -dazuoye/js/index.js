

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
    	var oNevcontent= document.querySelector('.head .nev-content');
    	var oNevUI= oNevcontent.getElementsByTagName('ul')[0];
    	var oNevLoader = document.querySelector('.head .nev-content .loader');
    	console.log(aNev);
    	var timer=null;
     	for (var i = 0; i < aNev.length; i++) {
     		aNev[i].index = i;
     		
    		aNev[i].onmouseenter = function(){
    			clearTimeout(timer);
    			oNevUI.innerHTML = '';
    			oNevcontent.style.borderTop='1px solid #ccc';
    			animation(oNevcontent,{height:200});
                oNevLoader.style.display = 'block';
    			var index = this.index;
    			setTimeout(function(){
    				loadData(index);
    				oNevLoader.style.display = 'none';
    			},1000)
    		}
    		aNev[i].onmouseleave = function(){
    			timer=setTimeout(function(){
				    oNevcontent.style.borderTop='none';
				    oNevLoader.style.display = 'none';
				    oNevUI.innerHTML = '';
				    animation(oNevcontent,{height:0});
    			},500)	
    		}
    		oNevcontent.onmouseenter = function(){
    			clearTimeout(timer);
    			//清除定时器就不会再执行定时器里面的内容。也就是不会消失
    		}
    		oNevcontent.onmouseleave = function(){
    			timer=setTimeout(function(){
				   oNevcontent.style.borderTop='none';
				   oNevLoader.style.display ='none';
				   oNevUI.innerHTML= '';
				   animation(oNevcontent,{height:0});
    			},500)	
    		}

     	}
     
     	function loadData(index){
            oNevUI.innerHTML='';
     		var aDatas= aNevItems[index];
            if(!aDatas){
                return;
            }
     		for (var i = 0; i < aDatas.length; i++) {
     			var oLi = document.createElement('li');
     			var oDiv = document.createElement('div');
     			oDiv.className= 'img-box';
     			var oImg = document.createElement('img');
     			oImg.src = aDatas[i].img;
     			var oP1 = document.createElement('p');
				oP1.className = 'name';
				oP1.innerHTML =  aDatas[i].name;
				var oP2 = document.createElement('p');
				oP2.className = 'price';
				oP2.innerHTML = aDatas[i].price + "元起";
				if(aDatas[i].tag){
				var oSpan =  document.createElement('span');
				oSpan.className = 'tag';
				oSpan.innerHTML = aDatas[i].tag;
				oLi.appendChild(oSpan);
			}
				oDiv.appendChild(oImg);
				oLi.appendChild(oDiv);

     			oLi.appendChild(oP1);
     			oLi.appendChild(oP2);
     			oNevUI.appendChild(oLi);
     		}
     	}

 
    } 

    handleSearch();
    function handleSearch(){
        var oList =  document.querySelector('.nev .search .list');
        var oInput = document.querySelector('.head .nev .search  input');
        var aSearch = document.querySelectorAll('.head .nev .search  a');
        var oInputer = document.querySelector('.head .nev .search .iconfont');
        var oSearchBtn = document.querySelector('.head .nev .search a');
        oInput.onfocus = function(){
            oInput.style.borderColor = '#ff6700';
            oSearchBtn.style.borderColor= '#ff6700';
            oList.style.display= 'block';
            aSearch[1].style.display='none';
            aSearch[2].style.display='none';
        }
        oInput.onblur = function(){
            oInput.style.borderColor = '#ccc';
            oSearchBtn.style.borderColor= '#ccc';
            oList.style.display= 'none';
            aSearch[1].style.display='block';
            aSearch[2].style.display='block';
        }


    }

    handleCarousel();
    function handleCarousel(){
  
        new Carousel({
            id:'Carousel',
            aImg:[
                'images/2.jpg',
                'images/3.jpg',
                'images/4.jpg'
            ],
            width:1200,
            height:460,
            playDuration:3000
        })
    }

    handHot();
    function handHot(){
        var aMaxa=document.querySelectorAll(".hot .max  .list  li a ");
        var aMax=document.querySelector(".hot .max  .list  ");
        var aContent=document.querySelector(".hot .max-content");

        var oMaxUI = aContent.getElementsByTagName('ul')[0];
        timer = null;
        for (var i = 0; i < aMaxa.length; i++) {
            aMaxa[i].index = i;
            aMaxa[i].onmouseenter = function(){
                console.log(aMax);
                
                    for (var j = 0; j < aMaxa.length; j++) {
                    aMaxa[j].className = '';
                    }
                    this.className = 'active';
                    aContent.style.display = 'block';
                     loadData(this.index);
    
               
            }
        }

            console.log(aMaxa);
            aMax.onmouseleave = function(){
               // alert('jjj');
                timer = setTimeout(function(){
                    console.log('离开');
                    for (var i = 0; i < aMaxa.length; i++) {
                        aMaxa[i].className = '';
                    }
                    aContent.style.display = 'none';
                },500)
            }
            aContent.onmouseenter = function(){
                clearTimeout(timer);
            }
            aContent.onmouseleave = function(){
                 aContent.style.display = 'none';
            }

            function loadData(index){
                oMaxUI.innerHTML = '';
                var aDatas=aMaxItems[index];
                if (!aDatas) {
                    return;
                }
                var sHtml='';
                for (var i = 0; i < aDatas.length; i++) {
                    sHtml +='<li>';
                    sHtml +='<img src="'+aDatas[i].img+'" alt="">';
                    sHtml +='<a href="#">'+aDatas[i].name+'</a></li>';

                }
                oMaxUI.innerHTML = sHtml;

            }

    }
    handleTime()
    function handleTime(){
        timer=null;
        var abox = document.querySelectorAll('.hot .flash2  .time')
        var nextData=new Date('2018/05/31 12:00:00');
        //距离这个时间，剩余的时间
        // console.log(nextData.getTime());

        function toStr(num){
            if (num<10) {
                return '0'+num;
            }else{
                return ''+num;
            }
        }
        
        timer =setInterval(time,500);

        function time(){
            var now = new Date();
            // console.log(now);
            var allTime =nextData.getTime()-now.getTime();
            //差不能太大，gettime是转化成秒
          
            if (allTime<0) {
                allTime=0;
                clearInterval(timer);
            }
            var all= parseInt(allTime/1000);
            var h =parseInt(all/3600);
            var m= parseInt((all%3600)/60);
            var s= (all%3600)%60;
            // console.log(h+'##'+m+'##'+s);
        abox[0].innerHTML= toStr(h);
        abox[1].innerHTML= toStr(m);
        abox[2].innerHTML= toStr(s);

        }
        time();

    }

   handleFlash()
    function handleFlash(){
        var aSpan =document.querySelectorAll('.hot .flashtop .dd span')
        var oul =document.querySelector('.hot .product .flash3 ');
        aSpan[1].onclick = function(){
            animation(oul,{marginLeft:-970});
            this.className='';
            aSpan[0].className='active';
        }
        aSpan[0].onclick = function(){
            animation(oul,{marginLeft:0});
            this.className='';
            aSpan[1].className='active';

        }
    }

    handmore()
    function handmore(){
        var ali=document.querySelectorAll('.body .title2  ul li');
        for (var i = 0; i < ali.length; i++) {
            this.index = i;
            ali[i].onmouseenter = function (){
                for (var i = 0; i < ali.length; i++) {
                    ali[i].className = '';
                }
                this.className = 'active';
               // loadData(this.index);
            }
        }

        
        function loadData(index){
       oul.innerHTML='';
       var aDatas = moreItems[inex];
       if (!aDatas) {
              return;
       }
       var sHtml = '';
       for (var i = 0; i < aDatas.length; i++) {
            //aDatas[i]
        }    


        }
    }









    
    



