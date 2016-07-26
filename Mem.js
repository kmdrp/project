var Mem=function(stage,y,date,day){
	this.stage=stage;
	this.wrap;
	this.div;
	this.div1;
	this.div2;
	this.divbutton;
	this.date=date;
	this.day=day;
	this.divtop;
	this.divbot;
	this.checkbox;
	this.div;
	this.txt;
	this.butt;
	this.width=800;
	this.height=150;
	this.x;
	this.y=this.y;	
	this.divbutton;
//	this.date=date;
	this.dayName=["sun","mon","tue","wed","thu","fri","sat"];
	this.clickflag=true;
	
	
	this.init=function(){
		var me=this;
		this.wrap=document.createElement("div");
		this.div=document.createElement("div");
		this.div1=document.createElement("div");
		this.div2=document.createElement("div");
		this.divbutton=document.createElement("div");
		this.divtop=document.createElement("div");
		this.divbot=document.createElement("div");
		this.checkbox=document.createElement("input");
		this.txt=document.createElement("textarea");
		this.butt=document.createElement("input");
		this.checkbox.type="checkbox";
		this.butt.type="button";		
		///////////////////////////////////////
		//////////////wrap///////////////////
		this.wrap.style.width=this.width+"px";
		this.wrap.style.height=this.height+"px";
		this.wrap.style.position="relative";
		this.wrap.style.top=this.y+"px";
		this.wrap.style.left=40+"px";
		this.wrap.id="cover";
		
		///////////////////////////////////////
		/////////////checkbox//////////////
		this.checkbox.style.position="relative";
		this.checkbox.style.width=20+"px";
		this.checkbox.style.height=20+"px";
		this.checkbox.style.left=0+"px";
		this.checkbox.style.top=this.y+parseInt(this.wrap.height)+"px";
		this.checkbox.style.verticalAlign="middle";
		this.checkbox.style.float="left";
		this.checkbox.style.marginTop=65+"px";

		//////////////////////////////////////
		///////////////div///////////////////	
		this.div.style.position="relative";
		this.div.style.width=610+"px";
		this.div.style.height=120+"px";
		this.div.style.left=40+"px";
		this.div.style.top=this.y+(parseInt(this.wrap.height)-parseInt(this.div.height))/2+"px";
		this.div.style.border=1+"px solid black";
		this.div.style.marginTop=25+"px";
		this.div.style.float="left";
		//////////////////////////////////////////////////////////////////////
		///////////////////////div1////////////////////////////////////
		this.div1.style.position="relative";
		this.div1.style.width=99+"px";
		this.div1.style.height=100+"%";
		this.div1.style.left=0+"px";
		this.div1.style.float="left";
		this.div1.style.borderRight=1+"px solid";

		/////////////////////////////////////////////////////////////////////////////
		/////////////////////////////div2/////////////////////////////////////////
		this.txt.style.position="relative";
		this.txt.style.width=504+"px";
		this.txt.style.height=95+"%";
		this.txt.style.left=0+"px";

		this.div2.style.float="left";
		this.div2.style.position="relative";
		this.div2.style.width=500+"px";
		this.div2.style.height=100+"%";
		this.div2.style.left=0+"px";
		this.div2.id="div_in";

		///////////////////////////////////////////////////////////////////
		/////////////div top////////////////////////////
		this.divtop.style.position="relative";
		this.divtop.style.width=100+"%";
		this.divtop.style.height=50+"px";
		this.divtop.innerText=this.date;
		this.divtop.style.textAlign="center";
		this.divtop.style.fontSize="25pt";
		
		/////
		this.divbutton.style.position="relative";
		this.divbutton.style.float="left";
		this.divbutton.style.width=70+"px";
		this.divbutton.style.height=30+"px";
		this.divbutton.style.left=50+"px";
		this.divbutton.style.top=120+"px";
		this.butt.value="regist";
		this.butt.style.width=70+"px";
		this.butt.style.textAlign="center";
		this.butt.id="reg";
		/////////////////////////////////////////////////////////////
		////////////////////////div bot///////////////////////////
		this.divbot.style.position="relative";
		this.divbot.style.width=100+"%";
		this.divbot.style.height=69+"px";
		this.divbot.style.borderTop=1+"px solid black";
		this.divbot.innerText=this.day;
	
		this.divbot.style.textAlign="center";
		this.divbot.style.verticalAlign="middle";
		this.divbot.style.fontSize="30pt";
		this.divbot.id="divbot";
		////////////////////////////////////////////////////////
		this.div2.appendChild(this.txt);
		this.div1.appendChild(this.divtop);
		this.div1.appendChild(this.divbot);

		this.divbutton.appendChild(this.butt);
		this.div.appendChild(this.div1);
		this.div.appendChild(this.div2);
		
		this.wrap.appendChild(this.checkbox);
		this.wrap.appendChild(this.div);
		this.wrap.appendChild(this.divbutton);
		this.stage.appendChild(this.wrap);
		
		
		this.daycolor();
		this.updat();
		this.regist();
	}
	this.regist=function(){//// if else문 반복 처리
		var me=this;
		this.butt.addEventListener("click",function(){			
			if(me.butt.value=="regist")	{
				if(me.txt.value!=""){
					me.div2.innerText=me.txt.value;	
					me.butt.value="update";
					//me.clickflag=false;
				}
				else{
					alert("insert text!");
					
				}	
			}else if(me.butt.value=="update"){
				me.butt.value="regist";
				me.txt.style.position="relative";				
				me.txt.value=me.div2.innerText;
				me.div2.innerText="";
				me.div2.appendChild(me.txt);				
			}
		});
	}
	this.daycolor=function(){
		var me=this;
		if(me.day=="sun"){
			me.divbot.style.color="red";
		}else if(me.day=="sat"){
			me.divbot.style.color="blue";
		}
		
	}
	this.updat=function(){
		var me=this;
		this.div2.addEventListener("click",function(){
			if(false){
				var newtxt=document.createElement("textarea");
				newtxt.style.position="relative";
				newtxt.style.width=500+"px";
				newtxt.style.height=95+"%";
				newtxt.style.left=0+"px";
				newtxt.value=me.div2.innerText;
				me.div2.appendChild(newtxt);
				me.clickflag=true;
			}
		});
	}
	
	
}