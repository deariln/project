import{n as B,r as n,c as S,a as t,d as N,q as _,v as I,u as r,s as C,t as a,p as M,F as D,o as V}from"./Bo6cV8TV.js";import{u as F}from"./BBOkGBC1.js";const R={class:"container"},T={action:"",class:"form"},U={id:"matrixSVG",viewBox:"0 0 800 800",preserveAspectRatio:"xMidYMid meet"},q={x:"48",y:"406",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},A={x:"392",y:"62",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},E={x:"736",y:"405",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},G={x:"392",y:"750",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},Y={x:"392",y:"406",fill:"#000000",style:{font:"bold 22px Cakra, serif"}},J=B({__name:"matrix_year",setup(j){const u=n("2006-07-31"),c=n("2025"),o=n(""),y=n(""),g=n(""),k=n(""),v=n(""),h=n(""),d=F(),w=()=>{const m=u.value.split("-");m[2],m[1],m[0];let e=c.value.split("").reduce((s,l)=>s+ +l,0);o.value=e.toString();let i=d.shared.dayNum+parseInt(o.value);i>22&&(i=i.toString().split("").reduce((s,l)=>s+ +l,0)),y.value=i.toString();let f=d.shared.monthNum+parseInt(o.value);f>22&&(f=f.toString().split("").reduce((s,l)=>s+ +l,0)),g.value=f.toString();let x=d.shared.yearNum+parseInt(o.value);x>22&&(x=x.toString().split("").reduce((s,l)=>s+ +l,0)),k.value=x.toString();let p=d.shared.fateNum+parseInt(o.value);p>22&&(p=p.toString().split("").reduce((s,l)=>s+ +l,0)),v.value=p.toString();let b=parseInt(y.value)+parseInt(g.value)+parseInt(k.value)+parseInt(v.value);b>22&&(b=b.toString().split("").reduce((s,l)=>s+ +l,0)),h.value=b.toString()};return(m,e)=>(V(),S(D,null,[t("div",R,[t("form",T,[_(t("input",{class:"input-date",type:"date",id:"birthday",name:"birthday","onUpdate:modelValue":e[0]||(e[0]=i=>C(u)?u.value=i:null)},null,512),[[I,r(u)]]),_(t("input",{class:"input-year",type:"number",min:"1900",max:"2099",step:"1",placeholder:"Год","onUpdate:modelValue":e[1]||(e[1]=i=>C(c)?c.value=i:null)},null,512),[[I,r(c)]]),N(" "+a(r(u)),1)])]),N(" left "+a(r(y))+" year "+a(r(o))+" ",1),t("div",{class:"div-butt_year"},[t("button",{class:"butt-year",onClick:w},"Рассчитать")]),N(" "+a(r(d).shared)+" ",1),(V(),S("svg",U,[e[2]||(e[2]=M('<line id="line-1-2" x1="56" y1="400" x2="400" y2="56" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-2-3" x1="400" y1="56" x2="744" y2="400" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-3-4" x1="744" y1="400" x2="400" y2="744" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-4-1" x1="400" y1="744" x2="56" y2="400" class="line-segment" style="stroke-dasharray:486.489;stroke-dashoffset:0;"></line><line id="line-1-5" x1="56" y1="400" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-2-5" x1="400" y1="56" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-3-5" x1="744" y1="400" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><line id="line-4-5" x1="400" y1="744" x2="400" y2="400" class="line-segment" style="stroke-dasharray:344;stroke-dashoffset:0;"></line><circle cx="56" cy="400" r="29" class="matrix-circle" style="stroke:rgb(174, 143, 190);fill:rgb(255, 255, 255);"></circle>',9)),t("text",q,a(r(y)),1),e[3]||(e[3]=t("circle",{cx:"400",cy:"56",r:"29",class:"matrix-circle",style:{stroke:"rgb(174, 143, 190)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",A,a(r(g)),1),e[4]||(e[4]=t("circle",{cx:"744",cy:"400",r:"29",class:"matrix-circle",style:{stroke:"rgb(199, 90, 90)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",E,a(r(k)),1),e[5]||(e[5]=t("circle",{cx:"400",cy:"744",r:"29",class:"matrix-circle",style:{stroke:"rgb(199, 90, 90)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",G,a(r(v)),1),e[6]||(e[6]=t("circle",{cx:"400",cy:"400",r:"29",class:"matrix-circle",style:{stroke:"rgb(191, 153, 161)",fill:"rgb(255, 255, 255)"}},null,-1)),t("text",Y,a(r(h)),1)]))],64))}});export{J as default};
